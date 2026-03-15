import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary"
import { Toaster } from "@/components/ui/sonner"
import App from './App'
import ErrorFallback from './ErrorFallback'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
    <Toaster />
  </ErrorBoundary>
)
