import { useState } from 'react';
import Signup from './Signup'; // make sure path sahi ho

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const handleFakeGoogleLogin = () => {
    const fakeUser = {
      name: "Hassan Ali",
      email: "hassan@example.com",
    };
    setUser(fakeUser);
  };

  if (showSignup) {
    return <Signup onBack={() => setShowSignup(false)} />;
  }

  if (user) {
    return (
      <div className="w-full max-w-sm mx-auto py-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-green-400">Welcome, {user.name}!</h2>
        <p className="text-orange-300">You're logged in as {user.email}</p>
      </div>
    );
  }

  return (
        <div className="w-full max-w-[260px] mx-auto px-4 py-4 bg-gray-700 rounded-lg shadow-md">
{/* <div className="w-full max-w-sm mx-auto px-4 sm:px-6 py-6 bg-gray-700 rounded-lg shadow-md"> */}

      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-[0_0_5px_#e99b63]">
        Login to Your Account
      </h2>

      <button
        onClick={handleFakeGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border border-orange-400 py-2 rounded-md hover:bg-orange-100 mb-4 text-orange-500 font-semibold transition-all shadow-[0_0_10px_#e99b63]"
      >
        <i className='bx bxl-google text-xl'></i> Continue with Google
      </button>

      <div className="relative mb-4">
        <hr className="border-t border-orange-300" />
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-black px-2 text-orange-300 text-sm">or</span>
      </div>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-orange-400 px-4 py-2 rounded-md bg-black text-white focus:outline-none focus:border-orange-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-orange-400 px-4 py-2 rounded-md bg-black text-white focus:outline-none focus:border-orange-500"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-all shadow-[0_0_20px_#e99b63]"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-orange-300">
        Don’t have an account?{" "}
        <button
          onClick={() => setShowSignup(true)}
          className="text-orange-400 hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;

