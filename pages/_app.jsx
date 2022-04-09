
import { PageLayout } from "../components/Layout"
import { Header } from "../components/Header"
import "../styles/globals.css"

function MyApp ({ Component, pageProps }) {
  return (
    <PageLayout>
      <Header />
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default MyApp
