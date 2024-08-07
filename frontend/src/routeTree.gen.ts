/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignUpImport } from './routes/signUp'
import { Route as ResetPasswordIndexImport } from './routes/reset-password/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as ResetPasswordForgetImport } from './routes/reset-password/forget'

// Create Virtual Routes

const UserLazyImport = createFileRoute('/user')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UserLazyRoute = UserLazyImport.update({
  path: '/user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/user.lazy').then((d) => d.Route))

const SignUpRoute = SignUpImport.update({
  path: '/signUp',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ResetPasswordIndexRoute = ResetPasswordIndexImport.update({
  path: '/reset-password/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const ResetPasswordForgetRoute = ResetPasswordForgetImport.update({
  path: '/reset-password/forget',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/signUp': {
      id: '/signUp'
      path: '/signUp'
      fullPath: '/signUp'
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserLazyImport
      parentRoute: typeof rootRoute
    }
    '/reset-password/forget': {
      id: '/reset-password/forget'
      path: '/reset-password/forget'
      fullPath: '/reset-password/forget'
      preLoaderRoute: typeof ResetPasswordForgetImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/reset-password/': {
      id: '/reset-password/'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof ResetPasswordIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  SignUpRoute,
  UserLazyRoute,
  ResetPasswordForgetRoute,
  LoginIndexRoute,
  ResetPasswordIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/signUp",
        "/user",
        "/reset-password/forget",
        "/login/",
        "/reset-password/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/signUp": {
      "filePath": "signUp.tsx"
    },
    "/user": {
      "filePath": "user.lazy.tsx"
    },
    "/reset-password/forget": {
      "filePath": "reset-password/forget.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/reset-password/": {
      "filePath": "reset-password/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
