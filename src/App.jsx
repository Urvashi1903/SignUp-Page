import React from 'react'

const App = () => {
  return (
    <div className='relative h-screen xl:h-[1024px] bg-cover'>
      {/* background-image */}
      <img className='absolute top-0 left-0 w-full h-full' src='https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg'></img>

      {/* content */}
      <div className='absolute w-full top-5 flex flex-col justify-start items-center z-10 overflow-hidden'>

        {/* header */}
        <div>
          <h2 className='text-gray-500 firaSans-font text-center text-xl md:text-2xl lg:text-4xl'>Quick SignIn & SignUp Form</h2>
        </div>
        {/* form */}
        <div className='bg-white/70 py-4 px-15 mt-10 garamond-font shadow-2xl'>
          <form>

            <div className='text-left mx-15 md:mx-25 lg:mx-35'>
              <nav>
                <a href="#signIn" className='mr-5 text-xl text-blue-900 opacity-70 hover:opacity-100 hover:underline underline-offset-6'>SignIn</a>
                <a href="#signUp" className='text-xl text-blue-900 opacity-70 hover:opacity-100 hover:underline underline-offset-6'>SignUp</a>
              </nav>
            </div>

            <div className='pt-7'>
              <label for='username' className='block'>Username</label>
              <input id='username' type='text' className='border border-blue-600 rounded-xl border-b-2 w-full p-2'></input>
            </div>

            <div className='garamond-font pt-7'>
              <label for='username' className='block'>Password</label>
              <input id='username' type='password' className='border border-blue-600 rounded-xl border-b-2 w-full p-2'></input>
            </div>

            <div className='garamond-font pt-7'>
              <label for='username' className='block'>Re-Enter Password</label>
              <input id='username' type='password' className='border border-blue-600 rounded-xl border-b-2 w-full p-2'></input>
            </div>

            <div className='garamond-font pt-7'>
              <label for='username' className='block'>E-mail</label>
              <input id='username' type='email' className='border border-blue-600 rounded-xl border-b-2 w-full p-2'></input>
            </div>

            <div className='mt-6'>
              <button className='bg-blue-700 text-white w-full rounded-3xl py-1 text-xl hover:bg-blue-950 cursor-pointer'>Sign Up</button>
            </div>

            <div className='text-center p-7'>
              <p className='text-blue-950 text-lg cursor-pointer hover:underline'>Already Member?</p>
            </div>

            {/* checking */}
            <div className='text-center p-7'>
              <p className='text-blue-950 text-lg cursor-pointer hover:underline'>Already Member?</p>
            </div>

          </form>
        </div>
        
      </div>
    </div>
  )
}

export default App
