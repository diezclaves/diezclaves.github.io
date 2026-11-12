# Convierte los artículos HTML actuales a Markdown con front matter (formato de los borradores).
# Uso: python3 -I mig.py <raiz-del-repo>
import sys, os, re, json, glob, html
from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = sys.argv[1]
os.chdir(ROOT)

MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
def fecha_txt(iso):
    y, m, d = iso.split('-'); return f'{int(d)} de {MESES[int(m)-1]} de {y}'

def esc_text(s, in_table=False):
    s = s.replace('\\', '\\\\')
    for ch in '*_`[]<':
        s = s.replace(ch, '\\' + ch)
    s = s.replace('$$', '\\$\\$').replace('{:', '\\{:')
    if in_table: s = s.replace('|', '\\|')
    return s

def url_md(u):
    if re.search(r'[\s()<>]', u): return '<' + u + '>'
    return u

def inline(node, in_table=False):
    out = []
    for c in node.children:
        if isinstance(c, NavigableString):
            out.append(esc_text(re.sub(r'\s+', ' ', str(c)), in_table))
        elif c.name in ('strong',):
            out.append('**' + inline(c, in_table) + '**')
        elif c.name == 'em':
            out.append('*' + inline(c, in_table) + '*')
        elif c.name == 'code' and not c.attrs:
            t = c.get_text(); assert '`' not in t
            out.append('`' + t + '`')
        elif c.name == 'a' and set(c.attrs) <= {'href', 'rel'}:
            href = c['href']; ext = href.startswith('http')
            rel = c.get('rel')
            assert (rel == ['noopener']) == ext, (href, rel)
            out.append('[' + inline(c, in_table) + '](' + url_md(href) + ')')
        else:
            out.append(str(c))  # HTML en línea tal cual
    return ''.join(out)

def protect_start(line):
    # evita que una línea de párrafo se lea como lista, título, etc.
    if re.match(r'^(\d+)\. ', line): return re.sub(r'^(\d+)\.', r'\1\\.', line, 1)
    if re.match(r'^([-+*]\s|[#>:|=~^]|\{:)', line): return '\\' + line
    return line

def table_md(tbl):
    rows = []
    head = tbl.find('thead'); body = tbl.find('tbody')
    assert head and body
    hr = head.find_all('tr'); assert len(hr) == 1
    for th in hr[0].find_all('th'): assert th.get('scope') == 'col'
    rows.append([inline(c, True) for c in hr[0].find_all(['th'])])
    for tr in body.find_all('tr'):
        assert not tr.find('th')
        rows.append([inline(c, True) for c in tr.find_all('td')])
    lines = ['| ' + ' | '.join(rows[0]) + ' |', '|' + '|'.join('---' for _ in rows[0]) + '|']
    lines += ['| ' + ' | '.join(r) + ' |' for r in rows[1:]]
    return '\n'.join(lines)

def blocks(nodes):
    out = []
    for n in nodes:
        if isinstance(n, NavigableString):
            assert not n.strip(), repr(n); continue
        if n.name == 'p' and n.find(['ol', 'ul'], recursive=False):
            # HTML no válido (lista dentro de párrafo): se parte en párrafo, lista y párrafo
            assert not n.attrs
            seg = []
            def flush():
                if seg:
                    tmp = BeautifulSoup('<p></p>', 'html.parser').p
                    for x in seg: tmp.append(x)
                    s = inline(tmp).strip()
                    if s: out.append(protect_start(s))
                    seg.clear()
            for c in list(n.children):
                if getattr(c, 'name', None) in ('ol', 'ul'):
                    flush(); out.extend(blocks([c.extract()]))
                else: seg.append(c.extract())
            flush()
        elif n.name == 'p':
            cls = n.get('class')
            t = protect_start(inline(n).strip())
            if cls: t += '\n{: .' + ' .'.join(cls) + '}'
            assert set(n.attrs) <= {'class'}
            out.append(t)
        elif n.name == 'div' and n.get('class') == ['scroll']:
            out.append(table_md(n.find('table')))
        elif n.name in ('ul', 'ol') and not n.attrs:
            items = []
            for i, li in enumerate(n.find_all('li', recursive=False)):
                assert not li.find(['p', 'ul', 'ol', 'div']), li
                items.append(('- ' if n.name == 'ul' else f'{i+1}. ') + inline(li).strip())
            out.append('\n'.join(items))
        else:
            out.append(str(n))  # bloque HTML tal cual
    return out

def kids(tag):
    return [c for c in tag.children if not (isinstance(c, NavigableString) and not c.strip())]

report = []
variantes = {}
for f in sorted(glob.glob('articulos/*/*.html')):
    sec, slug = f.split('/')[1], f.split('/')[2][:-5]
    if slug == 'index' or slug == 'donde-pedir-ayuda': continue
    raw = open(f, encoding='utf-8').read()
    soup = BeautifulSoup(raw, 'html.parser')
    ld = json.loads(soup.find('script', type='application/ld+json').string)['@graph']
    art = ld[0]; lst = ld[1]
    canon = soup.find('link', rel='canonical')['href']
    assert canon == f'https://diezclaves.com/{f}', canon
    title = soup.title.string
    desc = soup.find('meta', attrs={'name': 'description'})['content']
    assert soup.find('meta', property='og:title')['content'] == art['headline']
    assert soup.find('meta', property='og:description')['content'] == desc == art['description']
    assert art['image'] == 'https://diezclaves.com/assets/og.png'
    assert art['datePublished'] == art['dateModified']
    fecha = art['datePublished']
    a = soup.find('article'); hdr = a.find('header')
    metas = hdr.find_all('p', class_='meta')
    mm = re.match(r'^(.+?) · (.+?) · (\d+) min de lectura$', metas[0].get_text())
    assert mm, metas[0]
    assert mm.group(2) == fecha_txt(fecha), (f, mm.group(2), fecha)
    minutos = int(mm.group(3))
    h1 = hdr.find('h1'); h1txt = h1.get_text()
    assert art['headline'] == lst['name'], (h1txt, art['headline'])
    spans = h1.find_all('span'); assert len(spans) == 1 and len(h1.find_all(True)) == 1
    destacado = spans[0].get_text()
    lede = hdr.find('p', class_='lede')
    assert lede.get_text() == desc, f
    fm = {'titulo_pagina': title, 'descripcion': desc, 'fecha': fecha, 'minutos': minutos}
    if h1txt != 'Diez claves ' + destacado: fm['destacado'] = destacado
    if h1txt != art['headline']: fm['titulo_compartir'] = art['headline']
    body = soup.body
    if body.get('data-variantes'):
        v = json.loads(body['data-variantes'])
        pais = [k for k, u in v.items() if u == '/' + f]; assert len(pais) == 1
        fm['variantes'] = 'identidad-digital'; fm['pais'] = pais[0]
        variantes['identidad-digital'] = v
        assert len(metas) == 2
        nombres = [x.get_text() for x in metas[1].find_all('a')]
        variantes.setdefault('_nombres', {}).update({k: n for k, n in zip([k for k in v if k != pais[0]], nombres)})
        variantes.setdefault('_propio', {})[pais[0]] = re.match(r'^Versión para (.+?)\. ', metas[1].get_text()).group(1)
    else:
        assert len(metas) == 1
    md = []
    md.append('# ' + h1txt)
    md.append(protect_start(esc_text(desc)))
    ch = kids(a)
    i = ch.index(hdr) + 1
    ol = a.find('ol', class_='claves')
    j = ch.index(ol)
    md += blocks(ch[i:j])
    claves = ol.find_all('li', recursive=False)
    assert len(claves) == 10, f
    for li in claves:
        k = kids(li); assert k[0].name == 'h2' and not k[0].attrs
        md.append('## ' + inline(k[0]).strip())
        md += blocks(k[1:])
    rest = ch[j+1:]
    for n in rest:
        cls = n.get('class') or []
        if 'cierre' in cls:
            k = kids(n); assert k[0].name == 'h2' and not k[0].attrs
            md.append('## ' + inline(k[0]).strip())
            bl = blocks(k[1:])
            # el párrafo «Revisado…» lleva la clase muted automáticamente
            bl = [re.sub(r'\n\{: \.muted\}$', '', b) if b.startswith('Revisado') else b for b in bl]
            md += bl
        elif 'prods' in cls:
            k = kids(n); assert k[0].name == 'h2' and k[0].get('id') == 'h-prods'
            md.append('## Para ponerlo en práctica')
            aviso = k[-1]; assert aviso.get('class') == ['aviso']
            ul = [x for x in k if x.name == 'ul']; assert len(ul) == 1; ul = ul[0]
            pre = k[1:k.index(ul)]; post = k[k.index(ul)+1:-1]
            assert not post, post
            md += blocks(pre)
            items = []; tienda = False
            for li in ul.find_all('li', recursive=False):
                lk = kids(li); assert len(lk) == 2 and lk[1].name == 'p' and not lk[1].attrs, li
                d = inline(lk[1]).strip()
                if lk[0].name == 'b':
                    nm = inline(lk[0]).strip()
                    items.append(f'- **{nm}.** {d}' if not nm.endswith('.') else f'- **{nm}** {d}')
                else:
                    x = lk[0]; assert x.name == 'a' and x.get('data-busca'), li
                    q = x['data-busca']
                    assert x['href'] == 'https://www.amazon.es/s?k=' + q.replace(' ', '+'), x
                    tienda = True
                    items.append(f'- [{inline(x).strip()}](tienda:{q.replace(" ", "+")}) {d}')
            md.append('\n'.join(items))
            exp = 'Enlaces a <span data-tienda-nombre>Amazon España</span> según tu región.' if tienda else 'En esta guía no hay enlaces a tiendas.'
            assert str(aviso).replace('=""','').startswith('<p class="aviso">' + exp), (f, aviso)
        elif 'rel' in cls:
            md.append('## Sigue leyendo')
            links = n.find_all('a')
            md.append('\n'.join(f'- [{inline(x).strip()}]({x["href"]})' for x in links))
            assert all(set(x.attrs) == {'href'} for x in links)
        elif 'sig' in cls:
            pass
        else:
            raise Exception((f, n.name, cls))
    y = ['---']
    for k2, v2 in fm.items():
        if isinstance(v2, int): y.append(f'{k2}: {v2}')
        elif k2 == 'fecha': y.append(f'{k2}: {v2}')
        else: y.append(f'{k2}: {json.dumps(v2, ensure_ascii=False)}')
    y.append('---')
    text = '\n'.join(y) + '\n\n' + '\n\n'.join(md) + '\n'
    open(f[:-5] + '.md', 'w', encoding='utf-8').write(text)
    os.remove(f)
    report.append(f)
json.dump(variantes, open('variantes.json', 'w'), ensure_ascii=False, indent=1)
print(len(report), 'convertidos')
