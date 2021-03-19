import Document, { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'

// if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
//   import('jquery')
//   import('slick-carousel')
//   import('fancybox')
//   import('jquery-sticky-kit')
//   // import autocolumnlist
//   import('masonry-layout')
//   import('lazy-youtube')
//   import('../vendors/js/myjs')
// }

// const Test = dynamic(() => {
//   return import('../vendors/js/jquery-3.5.1.min.js').then(mod => mod)
// }, {ssr: false})
// import('../vendors/js/jquery-3.5.1.min.js')
// import('../vendors/js/slick.min.js')
// import('../vendors/js/jquery.fancybox.min.js')
// import('../vendors/js/stickykit.js')
// import('../vendors/js/jquery.autocolumnlist.min.js')
// import('../vendors/js/masonry.min.js')
// import('../vendors/js/lazyYT.js')
// import('../vendors/js/myjs.js')

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang='ru'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script type='text/javascript' src='/js/jquery-3.5.1.min.js'></script>
          <script type='text/javascript' src='/js/slick.min.js'></script>
          <script type='text/javascript' src='/js/jquery.fancybox.min.js'></script>
          <script type='text/javascript' src='/js/stickykit.js'></script>
          <script type='text/javascript' src='/js/jquery.autocolumnlist.min.js'></script>
          <script type='text/javascript' src='/js/masonry.min.js'></script>
          <script type='text/javascript' src='/js/lazyYT.js'></script>
          <script type='text/javascript' src='/js/myjs.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
