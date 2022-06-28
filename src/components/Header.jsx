import logo from '../assets/img/tneLogo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full rounded-b-full bg-orange-300 h-44 relative">
        <img src={logo} alt="logo tne" className='w-60 mx-auto'/>  
        <i className="bi bi-arrow-left text-5xl absolute left-10 cursor-pointer" onClick={() => navigate(-1)}/>

    </div>
  )
}

export default Header