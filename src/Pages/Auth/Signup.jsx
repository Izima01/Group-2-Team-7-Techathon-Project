import React, { useState } from 'react'

const Signup = () => {
    const userDetails ={
        name:'',
        surname:'',
        pwd:'',
        cpwd:'',
        phone:0,

    }
    const [userData, setUserData] =useState(userDetails);

    const handleSignUp = (e)=>{
        const {value,name} = e.target
        setUserData({...userData, [name]: value})
    }
    console.log(userData)
    const handleSignUpSubmit = (e)=>{
        e.preventDefault()
        console.log(userData)
    }

  return (
    <div className="w-full  flex justify-center items-center flex-col">
        <a href="/" className="bg-[#565252] w-[146px] flex justify-center items-center text-[32px] text-white rounded-[14px] h-[50px]" >Logo</a>
  <form className="bg-white  px-8 pt-6 pb-8 mb-4" onSubmit={handleSignUpSubmit}>
    <div className="mb-[80px]">
      <label className="block text-left text-gray-700 text-[24px] leading-[29.05px] weight-[800] font-bold" for="username">
        NAME
      </label>
      <input
            className="shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-[829px] 
                        h-[83px] 
                        py-2 
                        px-3 
                        focus:outline-none 
                        focus:shadow-outline 
                        bg-[#D9D9D9]" 
                        type="text"
                        name={'name'}
                        value={userData.name}
                        onChange={handleSignUp}
                        />
    </div>
    <div className="mb-[80px]">
      <label className="block text-left text-gray-700 text-[24px] leading-[29.05px] weight-[800] font-bold " for="username">
        SURNAME
      </label>
          <input
            className="shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-[829px] 
                        h-[83px] 
                        py-2 
                        px-3 
                        focus:outline-none 
                        focus:shadow-outline 
                        bg-[#D9D9D9]" 
                        type="text"
                        name={'surname'}
                        value={userData.surname}
                        onChange={handleSignUp}
                        />
    </div>
    <div className="mb-[80px]">
      <label className="block text-left text-gray-700 text-[24px] leading-[29.05px] weight-[800] font-bold " for="username">
        EMAIL ADDRESS
      </label>
            <input
            className="shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-[829px] 
                        h-[83px] 
                        py-2 
                        px-3 
                        focus:outline-none 
                        focus:shadow-outline 
                        bg-[#D9D9D9]" 
                        type="email"
                        name={'email'}
                        value={userData.email}
                        onChange={handleSignUp}
                        />
    </div>
    <div className="mb-[80px]">
      <label className="block text-left text-gray-700 text-[24px] leading-[29.05px] weight-[800] font-bold " for="username">
        PHONE NUMBER
      </label>
            <input
            className="shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-[829px] 
                        h-[83px] 
                        py-2 
                        px-3 
                        focus:outline-none 
                        focus:shadow-outline 
                        bg-[#D9D9D9]" 
                        type="phone"
                        name={'phone'}
                        value={userData.phone}
                        onChange={handleSignUp}
                        />
    </div>
    <div className="mb-[80px]">
      <label className="block text-left text-gray-700 text-[24px] leading-[29.05px] weight-[800] font-bold" for="username">
        PASSWORD
      </label>
            <input
            className="shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-[829px] 
                        h-[83px] 
                        py-2 
                        px-3 
                        focus:outline-none 
                        focus:shadow-outline 
                        bg-[#D9D9D9]" 
                        type="password"
                        name={'pwd'}
                        value={userData.pwd}
                        onChange={handleSignUp}
                        />
    </div>
    <div className="mb-[80px]">
      <label className="block text-left text-gray-700 text-[24px] leading-[29.05px] weight-[800] font-bold " for="username">
        CONFIRM
      </label>
          <input
            className="shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-[829px] 
                        h-[83px] 
                        py-2 
                        px-3 
                        focus:outline-none 
                        focus:shadow-outline 
                        bg-[#D9D9D9]" 
                        type="password"
                        name={'cpwd'}
                        value={userData.cpwd}
                        onChange={handleSignUp}
                        />
    </div>
    
    <div className="text-right mt-[80px]">
      <button type="submit" className="bg-[#5BC66C] w-[269px] h-[70px] leading-[
38.73px] text-[32px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-[14px] " >
        Sign Up
      </button>
    </div>
    <div className="text-left">
        <a class="inline-block  align-baseline font-bold text-[32px] text-[
#000000] hover:text-blue-800" href="#">
        Terms and conditions apply
      </a>
    </div>
  </form>
  {/* <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
  </div>
  )
}

export default Signup