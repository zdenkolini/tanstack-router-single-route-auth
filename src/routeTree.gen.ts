/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'

// Create Virtual Routes

const AuthLazyImport = createFileRoute('/_auth')()
const IndexLazyImport = createFileRoute('/')()
const AuthAuthRegisterLazyImport = createFileRoute('/_auth/auth/register')()
const AuthAuthLoginLazyImport = createFileRoute('/_auth/auth/login')()

// Create/Update Routes

const AuthLazyRoute = AuthLazyImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_auth.lazy').then((d) => d.Route))

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthAuthRegisterLazyRoute = AuthAuthRegisterLazyImport.update({
  id: '/auth/register',
  path: '/auth/register',
  getParentRoute: () => AuthLazyRoute,
} as any).lazy(() =>
  import('./routes/_auth.auth.register.lazy').then((d) => d.Route),
)

const AuthAuthLoginLazyRoute = AuthAuthLoginLazyImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => AuthLazyRoute,
} as any).lazy(() =>
  import('./routes/_auth.auth.login.lazy').then((d) => d.Route),
)

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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/auth/login': {
      id: '/_auth/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthAuthLoginLazyImport
      parentRoute: typeof AuthLazyImport
    }
    '/_auth/auth/register': {
      id: '/_auth/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthAuthRegisterLazyImport
      parentRoute: typeof AuthLazyImport
    }
  }
}

// Create and export the route tree

interface AuthLazyRouteChildren {
  AuthAuthLoginLazyRoute: typeof AuthAuthLoginLazyRoute
  AuthAuthRegisterLazyRoute: typeof AuthAuthRegisterLazyRoute
}

const AuthLazyRouteChildren: AuthLazyRouteChildren = {
  AuthAuthLoginLazyRoute: AuthAuthLoginLazyRoute,
  AuthAuthRegisterLazyRoute: AuthAuthRegisterLazyRoute,
}

const AuthLazyRouteWithChildren = AuthLazyRoute._addFileChildren(
  AuthLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '': typeof AuthLazyRouteWithChildren
  '/auth/login': typeof AuthAuthLoginLazyRoute
  '/auth/register': typeof AuthAuthRegisterLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '': typeof AuthLazyRouteWithChildren
  '/auth/login': typeof AuthAuthLoginLazyRoute
  '/auth/register': typeof AuthAuthRegisterLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/_auth': typeof AuthLazyRouteWithChildren
  '/_auth/auth/login': typeof AuthAuthLoginLazyRoute
  '/_auth/auth/register': typeof AuthAuthRegisterLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '' | '/auth/login' | '/auth/register'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '' | '/auth/login' | '/auth/register'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/_auth'
    | '/_auth/auth/login'
    | '/_auth/auth/register'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutRoute: typeof AboutRoute
  AuthLazyRoute: typeof AuthLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutRoute: AboutRoute,
  AuthLazyRoute: AuthLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_auth": {
      "filePath": "_auth.lazy.tsx",
      "children": [
        "/_auth/auth/login",
        "/_auth/auth/register"
      ]
    },
    "/_auth/auth/login": {
      "filePath": "_auth.auth.login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/auth/register": {
      "filePath": "_auth.auth.register.lazy.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
