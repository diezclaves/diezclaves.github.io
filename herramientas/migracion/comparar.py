# Compara la web original con la generada por Jekyll, página a página, ignorando espacios
# entre etiquetas, el orden de atributos y el formato del JSON-LD.
import sys, os, re, json, difflib, glob
from bs4 import BeautifulSoup, NavigableString, Comment

A, B = sys.argv[1], sys.argv[2]

def canon(path):
    soup = BeautifulSoup(open(path, encoding='utf-8').read(), 'html.parser')
    out = []
    def walk(n, depth):
        for c in n.children:
            if isinstance(c, Comment): continue
            if isinstance(c, NavigableString):
                t = re.sub(r'\s+', ' ', str(c))
                if t.strip(): out.append('  ' * depth + 'T:' + t)
                elif out and not out[-1].endswith('|SP'): pass
                continue
            attrs = dict(c.attrs)
            for k, v in list(attrs.items()):
                if isinstance(v, list): attrs[k] = ' '.join(v)
            if c.name == 'body' and 'data-variantes' in attrs:
                attrs['data-variantes'] = json.dumps(json.loads(attrs['data-variantes']), sort_keys=False)
            if c.name == 'script' and attrs.get('type') == 'application/ld+json':
                out.append('  ' * depth + 'LD:' + json.dumps(json.loads(c.string), ensure_ascii=False, sort_keys=True))
                continue
            out.append('  ' * depth + '<' + c.name + ' ' + ' '.join(f'{k}="{attrs[k]}"' for k in sorted(attrs)) + '>')
            walk(c, depth + 1)
    walk(soup, 0)
    return out

files = sorted(set(os.path.relpath(p, A) for p in glob.glob(A + '/**/*.html', recursive=True)) | set(os.path.relpath(p, B) for p in glob.glob(B + '/**/*.html', recursive=True)))
bad = 0
for f in files:
    pa, pb = os.path.join(A, f), os.path.join(B, f)
    if not os.path.exists(pa): print('SOLO NUEVO', f); bad += 1; continue
    if not os.path.exists(pb): print('FALTA', f); bad += 1; continue
    ca, cb = canon(pa), canon(pb)
    if ca != cb:
        bad += 1
        print('DIFIERE', f)
        if '-v' in sys.argv:
            for l in list(difflib.unified_diff(ca, cb, lineterm='', n=1))[:40]: print('   ', l[:300])
print(len(files), 'páginas;', bad, 'con diferencias')
