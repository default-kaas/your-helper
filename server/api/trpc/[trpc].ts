/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { createNuxtApiHandler } from 'trpc-nuxt'
import { router } from '~/server/trpc/trpc'
import { helloWorldRouter } from '~/server/api/trpc/helloWorld/helloWorld'
import { ticketsRouter } from '~/server/api/trpc/ticket/ticket'

export const appRouter = router({
  helloWorldRouter,
  ticketsRouter
})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
})