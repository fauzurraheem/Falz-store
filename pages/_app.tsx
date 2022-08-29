import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/layout'

interface Props {
  MyApp:({ Component, pageProps }: AppProps) => void
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
 
   
}

export default MyApp
