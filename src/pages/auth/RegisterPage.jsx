import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign Up</h2>
        <form action="#" method="POST" className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-100">
            Full Name
            </label>
            <div className="mt-2">
            <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            </div>
        </div>

        <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
            Email Address
            </label>
            <div className="mt-2">
            <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            </div>
        </div>

        <div>
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                Password
            </label>
            <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                Forgot password?
                </a>
            </div>
            </div>
            <div className="mt-2">
            <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            </div>
        </div>

        <div>
            <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
            Sign in
            </button>
        </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
        Already a member?{' '}
        <Link to='/login' className="font-semibold text-indigo-400 hover:text-indigo-300">Login</Link>
        </p>
    </div>
  )
}

export default RegisterPage