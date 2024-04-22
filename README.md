# nextjs-tutorial

## [Next.js 14 アプリ開発のあらすじ](https://zenn.dev/nino/books/30e21d37af73b5)

-   [my-app](./my-app)

```sh
bun dev
# or
bun debug
```

-   http://localhost:3000/

### Configuration

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
