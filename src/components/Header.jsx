import logo from '../assets/img/tneLogo.png'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Header = () => {

  const location = useLocation()

  console.log(location)

  const navigate = useNavigate()

  return (
    <div className="w-full rounded-b-full bg-orange-300 h-44 relative">
        <img src={logo} alt="logo tne" className='w-60 mx-auto'/>  

        { location.pathname !== '/user' && <i className="bi bi-arrow-left text-5xl absolute left-10 cursor-pointer" onClick={() => navigate(-1)}/>}

        <Link to="/user">
          <i class="bi bi-house text-5xl absolute right-10 cursor-pointer"></i>
        </Link>
        

    </div>
  )
}

export default Header