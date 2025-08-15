import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './providers/AuthProviders.tsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />



      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
