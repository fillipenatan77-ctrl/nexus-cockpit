"""Atualiza navs das páginas do home com hoje + grafo."""
import re
from pathlib import Path

HOME = Path(r"C:\NEXUS\90_REPOS\nexus-cockpit\home")

# Nova nav padrão (sem current — marcamos depois)
def build_nav(current):
    items = [
        ('./', '§ home', 'home'),
        ('./hoje.html', 'hoje', 'hoje'),
        ('./fichas.html', 'fichas', 'fichas'),
        ('./busca.html', 'busca', 'busca'),
        ('./diario.html', 'diário', 'diario'),
        ('./cards.html', 'cards', 'cards'),
        ('./autores.html', 'autores', 'autores'),
        ('./glossario.html', 'glossário', 'glossario'),
        ('./biblioteca.html', 'biblioteca', 'biblioteca'),
        ('./trilhas.html', 'trilhas', 'trilhas'),
        ('./protocolos.html', 'protocolos', 'protocolos'),
        ('./grafo.html', 'grafo', 'grafo'),
        ('./estacoes.html', 'palácio', 'estacoes'),
        ('./rag-status.html', 'rag', 'rag'),
        ('./citacao.html', 'citação', 'citacao'),
        ('./oraculo.html', 'oráculo', 'oraculo'),
    ]
    lines = ['  <div class="nav">']
    for href, label, key in items:
        cls = ' class="current"' if key == current else ''
        lines.append(f'    <a href="{href}"{cls}>{label}</a>')
    lines.append('  </div>')
    return '\n'.join(lines)

CURRENT_MAP = {
    'index.html': 'home',
    'hoje.html': 'hoje',
    'fichas.html': 'fichas',
    'busca.html': 'busca',
    'diario.html': 'diario',
    'cards.html': 'cards',
    'autores.html': 'autores',
    'glossario.html': 'glossario',
    'citacao.html': 'citacao',
    'oraculo.html': 'oraculo',
    'estacoes.html': 'estacoes',
    'grafo.html': 'grafo',
    'rag-status.html': 'rag',
    'biblioteca.html': 'biblioteca',
    'trilhas.html': 'trilhas',
    'protocolos.html': 'protocolos',
}

# Regex pra capturar a nav atual (tudo entre <div class="nav"> ... </div>, com conteúdo específico)
pattern = re.compile(r'  <div class="nav">.*?</div>', re.DOTALL)

for fname, current in CURRENT_MAP.items():
    path = HOME / fname
    if not path.exists():
        print(f"SKIP {fname} (nao existe)")
        continue
    content = path.read_text(encoding='utf-8')
    if 'class="nav"' not in content:
        print(f"SKIP {fname} (sem nav)")
        continue
    new_nav = build_nav(current)
    # Substituir primeira ocorrência de div.nav ... </div>
    new_content = pattern.sub(new_nav, content, count=1)
    if new_content != content:
        path.write_text(new_content, encoding='utf-8')
        print(f"ok   {fname} -> nav atualizada (current={current})")
    else:
        print(f"n/a  {fname} sem mudanca")
