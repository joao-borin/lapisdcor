# Este Dockerfile otimiza a criação de imagens para deploy de aplicações Next.js em produção,
# aproveitando multi-stage builds para reduzir o tamanho da imagem final e melhorar a segurança.
# Ele separa as dependências, a construção e a execução da aplicação em diferentes estágios,
# garantindo que apenas o necessário para rodar a aplicação seja incluído na imagem final.
# Além disso, configura um usuário não-root para maior segurança e define as variáveis de ambiente para produção.

FROM node:lts-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]