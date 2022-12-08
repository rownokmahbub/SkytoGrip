
import Footer from './Home/Footer'
import { Nav } from './Home/Nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav/>
      <main>{children}</main>
    <Footer/>
    </>
  )
}