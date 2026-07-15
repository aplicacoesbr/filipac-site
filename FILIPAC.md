# Filipac — Documentação do Projeto

## Visão Geral

Site institucional da Filipac, fabricante de máquinas de embalagem Chub Packaging para a indústria de explosivos. O site apresenta o produto principal (ExPlus 2000) e canais de contato.

- **Stack:** React + Vite
- **Deploy:** Vercel (auto-deploy via webhook GitHub)
- **Domínio:** filipac.com.br

---

## Branches

| Branch | Finalidade |
|--------|-----------|
| `main` | Produção — deploy automático no Vercel |
| `developer` | Desenvolvimento ativo — versão de manutenção |
| `release` | Cópia do estado original da `main` antes da manutenção |

---

## Estado Atual (main / produção)

O site está em **modo de manutenção**. Ao acessar, o usuário vê:

1. **Nav** — logo Filipac + toggle PT/EN (desktop). No mobile, apenas o logo.
2. **Seção de Manutenção** — tela cheia com "Site em Manutenção" e botão "Entre em contato" que rola até o contato.
3. **Seção de Contato** — layout dois-colunas (info + formulário). Coluna esquerda: label, título e card de e-mail (`contato@filipac.com.br`). Coluna direita: formulário via Formspree (`xdavwooa`).
4. **Footer** — logo + copyright © 2026 Filipac.
5. **LangFab** — botão flutuante no canto inferior direito (apenas mobile) para troca de idioma PT/EN.

O site completo (hero, stats, produto, aplicações, sobre) está preservado na branch `release`.

---

## Internacionalização (i18n)

Suporte a **PT** e **EN** via `LangContext` (`src/context/LangContext.jsx`).

Traduções em `src/i18n/translations.js`. Chaves ativas no modo manutenção:

- `nav.contact` — botão "Fale Conosco" / "Contact Us"
- `maintenance.title1`, `maintenance.title2`, `maintenance.cta`
- `contact.*` — todos os labels do formulário
- `footer.copy`

---

## Estrutura de Arquivos (src/)

```
src/
├── App.jsx                  # Raiz: Nav + LangFab + scroll-container(Maintenance, Contact, Footer)
├── index.css                # Estilos globais + responsivo
├── components/
│   ├── Nav.jsx              # Navegação fixa (logo + toggle desktop)
│   ├── LangFab.jsx          # Botão flutuante de idioma (mobile only)
│   ├── Maintenance.jsx      # Seção de manutenção full-screen
│   ├── Contact.jsx          # Seção de contato dois-colunas
│   └── Footer.jsx           # Rodapé
├── context/
│   └── LangContext.jsx      # Contexto de idioma (PT/EN)
├── hooks/
│   └── useScrollReveal.js   # Animação de entrada ao rolar
└── i18n/
    └── translations.js      # Textos PT e EN
```

---

## Decisões Técnicas Relevantes

### overflow-x e position: fixed
`overflow-x: hidden` foi removido de `html`/`body`. O conteúdo scrollável fica dentro de `.scroll-container` que tem `overflow-x: hidden`. Elementos `position: fixed` (nav e LangFab) ficam fora do wrapper e não são afetados por nenhum overflow constraint — resolve o bug do iOS/Android onde `overflow: hidden` no elemento raiz cortava elementos fixos na borda direita.

### LangFab (mobile)
No mobile (≤ 600px) o toggle de idioma some do nav e aparece como um FAB (`position: fixed; bottom: 24px; right: 20px`) com ícone de globo. Evita qualquer problema de layout no nav em telas estreitas.

### Scroll para seção de contato
`scroll-padding-top: 80px` no `html` garante que o link `#contato` não fique escondido atrás do nav fixo ao rolar.

### Formulário de contato
Integrado ao Formspree (`https://formspree.io/f/xdavwooa`) via `method="POST"`. Sem JavaScript extra — submit nativo do browser.

### font-size: 16px nos inputs (mobile)
Inputs, selects e textareas têm `font-size: 16px` no mobile para impedir o zoom automático do iOS Safari ao focar.

---

## Histórico de Mudanças Principais

### Modo Manutenção (developer → main)
- Criada branch `developer` a partir da `main`
- `App.jsx` simplificado: apenas Nav, Maintenance, Contact, Footer, LangFab
- `Nav.jsx` simplificado: removidos links de produto/aplicações/sobre; mantido toggle PT/EN (desktop) e botão "Fale Conosco"
- `Maintenance.jsx` criado: seção full-screen com título animado e CTA para contato
- `Contact.jsx` simplificado: removidos telefone, endereço e texto descritivo; mantido apenas card de e-mail e formulário
- Branch `release` criada como cópia do estado original da `main`
- Branch `developer` mergeada na `main`

### Otimização Mobile
- Nav responsivo: CSS Grid `auto 1fr` para conter logo e nav-right dentro do padding
- Removido botão "Fale Conosco" do nav no mobile (substituído pelo botão central na seção de manutenção)
- Toggle PT/EN movido para LangFab no mobile
- `scroll-padding-top` ajustado por breakpoint (80px → 72px → 66px)
- `font-size: 16px` em todos os inputs para evitar zoom iOS
- `overflow-x: hidden` movido de `html` para `.scroll-container` wrapper

### Correções de Copyright
- Footer atualizado de © 2025 para © 2026 (PT e EN)
