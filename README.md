# nextjs-workshop

- 以下のワークショップを参考に環境構築

  - [Next.js 14 アプリ開発のあらすじ](https://zenn.dev/nino/books/30e21d37af73b5)
  - [next-demo-app](https://github.com/dninomiya/next-demo-app)

- http://localhost:3000/

### Configuration

_clerk_

- API Keys > Publishable key
- API Keys > Secret keys

_cloudflare_

- R2 > Overview > Manage R2 API Tokens > Create API Token > Use the following credentials for S3 clients: > Access Key ID
- R2 > Overview > Manage R2 API Tokens > Create API Token > Use the following credentials for S3 clients: > Secret Access Key
- R2 > Overview > Manage R2 API Tokens > Create API Token > Use jurisdiction-specific endpoints for S3 clients: > Default

- R2 > Overview > Buckets > <YOUR-BUCKET> > Public R2.dev Bucket URL

_.env.local_

```sh
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Cloudflare
CLOUDFLARE_ACCESS_KEY_ID=
CLOUDFLARE_ACCESS_KEY=
CLOUDFLARE_ENDPOINT=

IMAGE_HOST_URL=

# Vercel Postgres
POSTGRES_DATABASE=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_PRISMA_URL=
POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_URL_NO_SSL=
POSTGRES_USER=
```

### 関連サービス

- [Clerk](https://clerk.com/)
- [Cloudflare](https://www.cloudflare.com/)
- [Vercel](https://vercel.com/)

### その他

現在設定されているすべての環境変数を出力

```sh
bun --print process.env
```

### prisma

マイグレーション

```sh
./node_modules/.bin/dotenv -e .env.local -- bun prisma migrate dev --name init
```

バリデーション

```
./node_modules/.bin/dotenv -e .env.local -- bun prisma validate
```

## Startup

```sh
bun install
bun debug
```
