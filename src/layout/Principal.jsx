import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Principal = () => {
  return (
    <>
      <Header/>

        <Outlet/>

      <Footer/>

    </>
  )
}

export default Principal