import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageWrapper from '../components/PageWrapper'
import '../styles/hugeStyle.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageWrapper>
        <Header />
        <div className='main-content'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </PageWrapper>
      {/* <script type='text/javascript' src='/js/jquery-3.5.1.min.js'></script>
      <script type='text/javascript' src='/js/slick.min.js'></script>
      <script type='text/javascript' src='/js/jquery.fancybox.min.js'></script>
      <script type='text/javascript' src='/js/stickykit.js'></script>
      <script type='text/javascript' src='/js/jquery.autocolumnlist.min.js'></script>
      <script type='text/javascript' src='/js/masonry.min.js'></script>
      <script type='text/javascript' src='/js/lazyYT.js'></script>
      <script type='text/javascript' src='/js/myjs.js'></script> */}
    </>
  )
}



export default MyApp
