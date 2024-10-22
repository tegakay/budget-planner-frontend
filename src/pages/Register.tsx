import React from 'react'

const Register = () => {
  return (
    <div className='flex p-5 flex-col  items-center gap-5 md:justify-around'>
        {/* first half */}
        <div>
            <h1>Create An Account</h1>
            <p>Start planning your expenses</p>
        </div>

        <form className='grid gap-4 w-full md:max-w-sm'>
        <input  type="text" placeholder="Enter your Username" name=""  className="my-2 border border-2 shadow p-3 rounded-lg" />

        <input  type="text" placeholder="Enter your Email" name=""  className="my-2 border border-2 shadow p-3 rounded-lg" />

        <input  type="password" placeholder="Enter your Password" name=""  className="my-2 border border-2 shadow p-3 rounded-lg" />

        <input  type="password" placeholder="Confirm Password" name=""  className="my-2 border border-2 shadow p-3 rounded-lg" />

        <button className=" my-2 inline-flex justify-center  shadow p-3 rounded-lg border border-2 bg-blue-600 text-white text-lg font-bold">Register</button>
        </form>
    </div>
  )
}

export default Register