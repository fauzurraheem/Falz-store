import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '@szhsin/react-menu/dist/core.css';
// import '@coreui/coreui/dist/css/coreui.min.css'


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
