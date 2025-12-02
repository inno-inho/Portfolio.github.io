import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/style.scss'
import '@styles/DarkMode.scss'
import '@styles/gradient.scss'
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import SideBar from "@components/SideBar";
import { ThemeProvider } from 'next-themes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class">
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
          <App />
          <Footer />
          <SideBar />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
)
