#!/bin/bash
# TennisLab — Deploy para Cloudflare Pages
# Uso: CLOUDFLARE_API_TOKEN=<seu_token> bash deploy.sh

ACCOUNT_ID="b2963ec786a4e3ad238f93ffb8933beb"
PROJECT_NAME="tennislab"

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ Defina: export CLOUDFLARE_API_TOKEN=seu_token"
  echo "   Gere em: https://dash.cloudflare.com/profile/api-tokens"
  exit 1
fi

echo "🔨 Fazendo build..."
npm install && npm run build

echo "🚀 Publicando no Cloudflare Pages..."
CLOUDFLARE_ACCOUNT_ID=$ACCOUNT_ID npx wrangler pages deploy dist \
  --project-name=$PROJECT_NAME \
  --commit-message="Deploy TennisLab $(date +%Y-%m-%d)"

echo "✅ Publicado! Acesse: https://$PROJECT_NAME.pages.dev"
