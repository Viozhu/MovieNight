import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from 'react-router-dom'
import { NavBar } from './Components'
import './index.css'
import { router } from './routes/index'
import { Provider } from 'react-redux'
import { store } from '@reduxStore'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
)
