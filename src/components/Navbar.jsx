import './style.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  let navigate=useNavigate()
  return (
    <nav>
        <h1>Doctor App</h1>
        <div className="nav-links">
          <div>
            <button onClick={()=>navigate('/')}>Home</button>
          </div>
          <div>
            <button onClick={()=>navigate('/add-doctor')}>Add doctor</button>
          </div>
            
        </div>
    </nav>
  )
}
export default Navbar;