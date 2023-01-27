import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Api } from './Api'

Api.defineMocks()

import App from './App'

const initElement = document.querySelector('#app') || document.body

const root = createRoot(initElement)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 2,
        },
    },
})

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
    </QueryClientProvider>
)
