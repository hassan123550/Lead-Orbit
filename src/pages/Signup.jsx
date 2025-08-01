const Signup = ({ onBack }) => {
  return (
    <div className="w-full max-w-[260px] mx-auto px-4 py-6 bg-gray-700 rounded-lg shadow-md">

{/* <div className="w-full max-w-sm mx-auto px-4 sm:px-6 py-6 bg-gray-700 rounded-lg shadow-md"> */}

      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-[0_0_5px_#e99b63]">
        Create an Account
      </h2>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-4 text-orange-400 hover:underline text-sm"
      >
        ← Back to Login
      </button>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-orange-400 px-4 py-2 rounded-md bg-black text-white focus:outline-none focus:border-orange-500"
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
