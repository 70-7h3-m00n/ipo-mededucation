import S from '../styles/modules/Layout.module.sass'

const Layout = ({children}) => {
  return (
    <div className={S.container}>
      <main className={S.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
