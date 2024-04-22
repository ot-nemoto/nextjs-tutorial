// ref https://clerk.com/docs/references/nextjs/auth-middleware
// import { authMiddleware } from "@clerk/nextjs";
// ref https://clerk.com/docs/references/nextjs/clerk-middleware
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// export default authMiddleware({
//     // 公開ルートを指定（利用規約やログイン画面などログイン不要でアクセスできるルート）
//     publicRoutes: ['/', '/terms'],
// });

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
