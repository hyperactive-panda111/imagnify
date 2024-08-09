import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
,
ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/transformations/",],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};