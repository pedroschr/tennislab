# 🎾 TennisLab — Comparador de Equipamentos de Tênis

Comparador de raquetes, cordas, bolas, raqueteiras e tênis de court com recomendações do time especialista e comparação de preços.

## Stack
- React 18 + Vite
- Deploy: Cloudflare Pages

## Configuração

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar localmente
```bash
npm run dev
```

### 3. Build para produção
```bash
npm run build
```

## Variáveis a configurar antes de publicar

No arquivo `src/App.jsx`, substitua:

| Variável | Onde encontrar |
|---|---|
| `SEUTAG-20` | [Amazon Afiliados](https://associados.amazon.com.br) |
| `SUA_CHAVE_BREVO` | [Brevo API Keys](https://app.brevo.com/settings/keys/api) |

## Deploy automático via Cloudflare Pages

1. Conecte este repositório no [Cloudflare Pages](https://dash.cloudflare.com)
2. Build command: `npm run build`
3. Build output directory: `dist`
4. A cada push na branch `main`, o deploy é feito automaticamente
