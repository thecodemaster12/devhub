import { Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/' >Home</Link>
          <Link to='/login' >Login</Link>
          <Link to='/register' >Register</Link>
        </li>
      </ul>
    </>
  )
}

export default App