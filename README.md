# nextjs-tutorial

## [Next.js 14 アプリ開発のあらすじ](https://zenn.dev/nino/books/30e21d37af73b5)

-   [my-app](./my-app)

## デプロイ

```sh
bun install

bun run build

bun run start
```

## 開発環境

```sh
bun dev
# or
bun debug
```

-   http://localhost:3000/

### Configuration

_clerk_

-   API Keys > Publishable key
-   API Keys > Secret keys

_cloudflare_

-   R2 > Overview > Manage R2 API Tokens > Create API Token > Use the following credentials for S3 clients: > Access Key ID
-   R2 > Overview > Manage R2 API Tokens > Create API Token > Use the following credentials for S3 clients: > Secret Access Key
-   R2 > Overview > Manage R2 API Tokens > Create API Token > Use jurisdiction-specific endpoints for S3 clients: > Default

-   R2 > Overview > Buckets > <YOUR-BUCKET> > Public R2.dev Bucket URL

_.env.local_

```sh
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# Cloudflare
CLOUDFLARE_ACCESS_KEY_ID=your_cloudflare_access_key_id
CLOUDFLARE_ACCESS_KEY=your_cloudflare_access_key
CLOUDFLARE_ENDPOINT=your_cloudflare_endpoint

IMAGE_HOST_URL=your_image_host_url
```

### 関連サービス

-   [Clerk](https://clerk.com/)
-   [Cloudflare](https://www.cloudflare.com/)
-   [Vercel](https://vercel.com/)
