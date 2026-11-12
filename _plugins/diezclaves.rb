# Diez Claves · generador del sitio.
#
# Lee los artículos en Markdown (articulos/<seccion>/<slug>.md, mismo formato que los borradores)
# y prepara todo lo que las plantillas necesitan:
#   - el cuerpo de cada artículo partido en entradilla, introducción, diez claves, cierre,
#     «Para ponerlo en práctica» y «Sigue leyendo»;
#   - el bloque «Siguiente en esta sección» y las versiones por país;
#   - las listas de la portada, del índice y de cada sección (site.data.dc);
#   - una página por sección (articulos/<seccion>/index.html), a partir de _data/secciones.yml.
#
# No necesita gemas aparte de Jekyll (kramdown viene con él).

require "kramdown"
require "json"
require "cgi"

module DiezClaves
  MESES = %w[enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre].freeze
  KRAMDOWN = {
    input: "kramdown",
    auto_ids: false,
    smart_quotes: %w[apos apos quot quot],
    typographic_symbols: { hellip: "...", mdash: "---", ndash: "--", laquo: "<<", raquo: ">>",
                           laquo_space: "<< ", raquo_space: " >>" },
    entity_output: :as_char,
    parse_block_html: false,
  }.freeze
  ESPECIALES = ["Para ponerlo en práctica", "Sigue leyendo"].freeze
  TABLA = '<div class="scroll" tabindex="0" role="region" aria-label="Tabla, se puede desplazar">'
  AVISO_TIENDA = 'Enlaces a <span data-tienda-nombre>Amazon España</span> según tu región.'
  AVISO_SIN = "En esta guía no hay enlaces a tiendas."
  AVISO_RESTO = " Diez Claves no tiene por ahora acuerdo de afiliación con ninguna tienda; cuando lo tenga, lo dirá aquí. Las alternativas gratuitas van siempre junto a las de pago."
  DOMINIO = "https://diezclaves.com"

  module_function

  def fecha_texto(iso)
    y, m, d = iso.to_s.split("-")
    "#{d.to_i} de #{MESES[m.to_i - 1]} de #{y}"
  end

  def h(s)
    CGI.escapeHTML(s.to_s).gsub("&#39;", "'")
  end

  # Markdown → HTML, con los retoques de la casa: tablas desplazables, enlaces internos relativos
  # y rel="noopener" en los externos.
  def md(text, enlaces)
    html = Kramdown::Document.new(text.to_s, KRAMDOWN).to_html
    html = html.gsub(/<table>(.*?)<\/table>/m) do
      t = Regexp.last_match(1).gsub(/>\s+</, "><").gsub("<th>", '<th scope="col">').strip
      "#{TABLA}<table>#{t}</table></div>"
    end
    html.gsub(/<a href="([^"]*)"([^>]*)>/) do
      href, resto = Regexp.last_match(1), Regexp.last_match(2)
      href = enlaces.call(CGI.unescapeHTML(href))
      if href.start_with?("http") && !resto.include?("rel=")
        %(<a href="#{h(href)}" rel="noopener"#{resto}>)
      else
        %(<a href="#{h(href)}"#{resto}>)
      end
    end
  end

  def md_linea(text, enlaces)
    md(text, enlaces).strip.sub(/\A<p>/, "").sub(/<\/p>\z/, "")
  end

  def bloques(text)
    text.to_s.strip.split(/\n\s*\n/).map(&:strip).reject(&:empty?)
  end

  def corto(h1)
    t = h1.sub(/\ADiez claves /, "").sub(/\A(para|sobre|frente a)\s+/, "").split(":").first.to_s
    t[0].to_s.upcase + t[1..].to_s
  end

  # Parte el Markdown de un artículo en sus piezas.
  def partir(page, enlaces)
    src = page.content.to_s.gsub("\r\n", "\n")
    h1 = src[/^# (.+)$/, 1].to_s.strip
    partes = src.split(/^## (.+)$/)
    pre = partes.shift.to_s.sub(/^# .+$/, "")
    secs = partes.each_slice(2).map { |t, c| [t.strip, c.to_s] }
    pre_bl = bloques(pre)
    lede = pre_bl.shift.to_s
    resto = secs.reject { |t, _| ESPECIALES.include?(t) }
    esp = secs.select { |t, _| ESPECIALES.include?(t) }.to_h
    claves = resto.first(10)
    cierre = resto[10]
    path = page.relative_path
    Jekyll.logger.warn "Diez Claves:", "#{path} tiene #{claves.size} claves (deberían ser 10)" if claves.size != 10
    Jekyll.logger.warn "Diez Claves:", "#{path} tiene secciones ## de sobra: #{resto[11..].map(&:first).join(', ')}" if resto.size > 11

    d = {}
    d["h1"] = h1
    d["lede"] = md_linea(lede, enlaces)
    d["intro"] = pre_bl.empty? ? "" : md(pre_bl.join("\n\n"), enlaces)
    d["claves"] = claves.map { |t, c| { "titulo" => md_linea(t, enlaces), "texto" => t, "html" => md(c, enlaces) } }
    if cierre
      html = md(cierre[1], enlaces).gsub("<p>Revisado", '<p class="muted">Revisado')
      d["cierre"] = { "titulo" => md_linea(cierre[0], enlaces), "html" => html }
    end
    if (p = esp["Para ponerlo en práctica"])
      intro = []
      items = []
      tienda = false
      bloques(p).each do |b|
        if b.start_with?("- ")
          b.split(/\n(?=- )/).each do |it|
            it = it.sub(/\A- /, "").gsub(/\s*\n\s*/, " ")
            if (m = it.match(/\A\[(.+?)\]\(tienda:(.+?)\)\s*(.*)\z/m))
              tienda = true
              q = m[2].tr("+", " ")
              items << %(<li><a data-busca="#{h(q)}" href="https://www.amazon.es/s?k=#{h(m[2])}" rel="noopener">#{md_linea(m[1], enlaces)}</a><p>#{md_linea(m[3], enlaces)}</p></li>)
            elsif (m = it.match(/\A\*\*(.+?)\.?\*\*\s*(.*)\z/m))
              items << %(<li><b>#{md_linea(m[1], enlaces)}</b><p>#{md_linea(m[2], enlaces)}</p></li>)
            else
              items << %(<li>#{md_linea(it, enlaces)}</li>)
            end
          end
        elsif !b.start_with?("No hay acuerdos")
          intro << b
        end
      end
      d["prods"] = {
        "intro" => intro.empty? ? "" : md(intro.join("\n\n"), enlaces),
        "items" => items.join,
        "aviso" => (tienda ? AVISO_TIENDA : AVISO_SIN) + AVISO_RESTO,
      }
    end
    if (r = esp["Sigue leyendo"])
      rel = []
      bloques(r).each do |b|
        next unless b.start_with?("- ")
        b.split("\n").each do |l|
          m = l.match(/\A- \[(.+?)\]\((.+?)\)\.?\s*\z/) or next
          rel << %(<a href="#{h(enlaces.call(m[2]))}">#{md_linea(m[1], enlaces)}</a>)
        end
      end
      d["rel"] = rel.join
    end
    palabras = src.scan(/[[:word:]]+/).size
    d["minutos_calc"] = [1, (palabras / 200.0).round].max
    d
  end

  class Generador < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      secciones = site.data["secciones"] || {}
      arts = site.pages.select { |p| %w[articulo articulo_html].include?(p.data["layout"]) }

      # slug → URL, para arreglar enlaces antiguos (/articulos/<slug>.html o https://diezclaves.com/…)
      mapa = {}
      arts.each { |p| mapa[File.basename(p.url, ".html")] = p.url }
      enlaces = lambda do |u|
        u = u.sub(DOMINIO, "") if u.start_with?(DOMINIO + "/")
        if (m = u.match(%r{\A/articulos/([a-z0-9-]+)\.html(#.*)?\z})) && mapa[m[1]]
          mapa[m[1]] + m[2].to_s
        else
          u
        end
      end

      info = {}
      arts.each do |p|
        sec = p.url.split("/")[2]
        slug = File.basename(p.url, ".html")
        if p.data["layout"] == "articulo"
          d = DiezClaves.partir(p, enlaces)
          p.data["dc"] = d
          h1 = d["h1"]
        else
          h1 = p.data["titular"].to_s
        end
        if p.data["fecha"].to_s.empty?
          p.data["fecha"] = (p.data["revision_fuentes"] || site.time.strftime("%Y-%m-%d")).to_s
          Jekyll.logger.warn "Diez Claves:", "#{p.relative_path} no tiene «fecha»; uso #{p.data['fecha']}"
        end
        fecha = p.data["fecha"].to_s
        p.data["seccion"] = sec
        p.data["slug"] = slug
        p.data["h1"] = h1
        p.data["fecha_texto"] = DiezClaves.fecha_texto(fecha)
        p.data["actualizado"] ||= fecha
        desc = p.data["descripcion"].to_s
        info[slug] = {
          "url" => p.url, "seccion" => sec, "slug" => slug, "h1" => h1, "corto" => DiezClaves.corto(h1),
          "desc" => desc, "fecha" => fecha, "actualizado" => p.data["actualizado"].to_s,
          "q" => "#{h1} #{desc}".downcase, "page" => p,
        }
        Jekyll.logger.warn "Diez Claves:", "#{p.relative_path}: la sección «#{sec}» no está en _data/secciones.yml" unless secciones[sec]
      end

      # orden de cada sección: el de secciones.yml y, detrás, los que falten por fecha
      lista = []
      secciones.each do |k, v|
        orden = (v["orden"] || []).select { |s| info[s] && info[s]["seccion"] == k }
        (v["orden"] || []).each { |s| Jekyll.logger.warn "Diez Claves:", "#{k}: «#{s}» está en secciones.yml pero no existe" unless info[s] && info[s]["seccion"] == k }
        extra = info.values.select { |i| i["seccion"] == k && !orden.include?(i["slug"]) }.sort_by { |i| [i["fecha"], i["slug"]] }.map { |i| i["slug"] }
        sl = orden + extra
        items = sl.map { |s| info[s].reject { |kk, _| kk == "page" } }
        sdata = { "clave" => k, "nombre" => v["nombre"], "desc" => v["desc"], "url" => "/articulos/#{k}/", "n" => sl.size, "articulos" => items }
        if (ag = v["agrupar"])
          base = items.reject { |i| i["slug"].start_with?(ag["prefijo"]) }
          grupo = items.select { |i| i["slug"].start_with?(ag["prefijo"]) }
          grupo.each { |i| i["pais_nombre"] = i["h1"].split(":").first.sub(/\A.*? en /, "") }
          sdata["indice"] = base
          sdata["grupo"] = { "titulo" => ag["titulo"], "url" => "/articulos/#{k}/", "articulos" => grupo,
                             "q" => grupo.map { |i| i["h1"].downcase }.join(" ") }
        else
          sdata["indice"] = items
        end
        lista << sdata
        sl.each_with_index do |s, n|
          sig = info[sl[(n + 1) % sl.size]]
          info[s]["page"].data["sig"] = {
            "seccion" => v["nombre"], "seccion_url" => "/articulos/#{k}/", "n" => n + 1, "total" => sl.size,
            "url" => sig["url"], "h1" => sig["h1"], "desc" => sig["desc"],
          }
          info[s]["page"].data["seccion_nombre"] = v["nombre"]
        end
      end

      # versiones por país
      (site.data["variantes"] || {}).each do |grupo, paises|
        urls = {}
        paises.each do |e|
          a = info.values.find { |i| i["page"].data["variantes"] == grupo && i["page"].data["pais"] == e["pais"] }
          urls[e["pais"]] = a["url"] if a
        end
        json = "{" + urls.map { |k, u| %("#{k}": "#{u}") }.join(", ") + "}"
        info.values.select { |i| i["page"].data["variantes"] == grupo }.each do |i|
          yo = i["page"].data["pais"]
          i["page"].data["variantes_json"] = json
          i["page"].data["variantes_lista"] = paises.select { |e| urls[e["pais"]] && e["pais"] != yo }.map { |e| e.merge("url" => urls[e["pais"]]) }
          i["page"].data["pais_nombre"] = paises.find { |e| e["pais"] == yo }&.fetch("nombre")
        end
      end

      todos = lista.flat_map { |s| s["articulos"] }
      ultima = todos.map { |i| i["fecha"] }.max.to_s
      porsec = lista.map { |s| s["articulos"].select { |i| i["fecha"] == ultima } }
      mezcla = []
      while porsec.any? { |x| !x.empty? }
        porsec.each { |x| mezcla << x.shift unless x.empty? }
      end
      portada = site.data["portada"] || {}
      site.data["dc"] = {
        "secciones" => lista,
        "total" => todos.size,
        "ultima" => ultima,
        "novedades" => mezcla.first((portada["novedades"] || 8).to_i),
        "ruta" => (portada["ruta"] || []).map { |s| info[s]&.reject { |kk, _| kk == "page" } }.compact,
      }

      # una página por sección
      lista.each do |s|
        pg = Jekyll::PageWithoutAFile.new(site, site.source, "articulos/#{s['clave']}", "index.html")
        pg.data["layout"] = "seccion"
        pg.data["seccion"] = s
        pg.data["sitemap_lastmod"] = ultima
        site.pages << pg
      end
    end
  end
end
