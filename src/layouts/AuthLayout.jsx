import { Link, Outlet } from "react-router-dom"


const AuthLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mb-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <Link to='/'>            
            <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="mx-auto h-10 w-auto"
            />
            </Link>
        </div>

        <Outlet />
    </div>
  )
}

export default AuthLayout