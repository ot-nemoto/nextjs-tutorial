# nextjs-workshop

- 以下のワークショップを参考に環境構築

  - [Next.js 14 アプリ開発のあらすじ](https://zenn.dev/nino/books/30e21d37af73b5)
  - [next-demo-app](https://github.com/dninomiya/next-demo-app)
  - [shadcn/ui x Clerk でイケてるログイン画面を実装](https://zenn.dev/hayato94087/articles/98a48652e48bdb)

## External services

- [_Clerk_](https://clerk.com/)
  - Developers > API Keys
    - Publishable key
    - Secret keys
  - Account Portal > Pages
    - User profile
- [_Cloudflare_](https://www.cloudflare.com/)
  - R2 > Overview > Create Bucket
  - R2 > Overview > Manage R2 API Tokens > Create API Token
    - Use the following credentials for S3 clients:
      - Access Key ID
      - Secret Access Key
    - Use jurisdiction-specific endpoints for S3 clients:
      - Default
  - R2 > Overview > Buckets > _YOUR-BUCKET_ > Public access > Public R2.dev Bucket URL
- [_Vercel_](https://vercel.com/)
  - Create Project > _YOUR-REPOSITORY_
    - Project Name: _Any_
    - Framework Preset: `Next.js`
    - Root Directory: `./`
    - Environment Variables:
      - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
      - `CLERK_SECRET_KEY`
      - `CLOUDFLARE_ACCESS_KEY_ID`
      - `CLOUDFLARE_ACCESS_KEY`
      - `CLOUDFLARE_ENDPOINT`
      - `IMAGE_HOST_URL`
  - _YOUR-PROJECT_ > Settings > Functions > Function Region
    - Tokyo, Japan (Notheast) - hnd1
  - _YOUR-PROJECT_ > Storage > Create Database > Postgres
  - _YOUR-PROJECT_ > Storage > _YOUR-DATABASE_ > Project > Connect Project > _YOUR-PROJECT_

## Packages

準備のために実行したコマンド（実行済み）

_prisma_

```sh
# dependencies
bun add @prisma/client @aws-sdk/client-s3

# devDependencies
bun add --dev prisma
```

_shadcn-ui_

```sh
bunx shadcn-ui@latest add button dropdown-menu
```

## Environments

_.env.local_

```sh
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= # Publishable key
CLERK_SECRET_KEY=                  # Secret keys
CLERK_USER_PROFILE=                # User profile

# Cloudflare
CLOUDFLARE_ACCESS_KEY_ID=          # Use the following credentials for S3 clients: Access Key ID
CLOUDFLARE_ACCESS_KEY=             # Use the following credentials for S3 clients: Secret Access Key
CLOUDFLARE_ENDPOINT=               # Use jurisdiction-specific endpoints for S3 clients: Default
IMAGE_HOST_URL=                    # Public R2.dev Bucket URL

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

## Prepares

```sh
bun install
```

## Migrate with prisma

```sh
dotenv -e .env.local -- bun prisma migrate dev --name init
```

## Startup

```sh
bun debug
```

_Open your Web browser http://localhost:3000/_

## Debug

- Client-Side
  - 実行とデバッグ > Debugging on Client-Side > デバッグの開始
- Server-Side
  - 実行とデバッグ > Debugging on Server-Side > デバッグの開始

### その他

現在設定されているすべての環境変数を出力

```sh
bun --print process.env
```

**Prisma**

schema ファイルのバリデーションチェック

```sh
dotenv -e .env.local -- bun prisma validate
```

schema ファイル更新後のマイグレーション

```sh
dotenv -e .env.local -- bun prisma migrate dev
```

ブラウザでデータを確認

```sh
dotenv -e .env.local -- bun prisma studio
```
