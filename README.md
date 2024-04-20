# nextjs-tutorial

## [Next.js 14 アプリ開発のあらすじ](https://zenn.dev/nino/books/30e21d37af73b5)

-   [my-app](./my-app)

```sh
bun run debug
```

-   http://localhost:3000/

### Configuration

_Clerk_

```sh
cat <<EOT | tee .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
EOT
```

### 関連サービス

-   [Clerk](https://clerk.com/)
-   [Cloudflare](https://www.cloudflare.com/)
-   [Vercel](https://vercel.com/)
