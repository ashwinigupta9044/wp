import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";


export default function Number() { const [countryCode, setCountryCode] = useState('+91'); ;

  const navigate = useNavigate();

return ( <div className="min-h-screen flex items-center justify-center"> <form

className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col gap-4" style={{height:"400px", width:"350px"}}>
   <div className="w-20 h-20 mx-auto rounded-full border-2 border-indigo-100 flex items-center justify-center text-3xl font-bold "> 
        <img className='rounded-full border-indigo-100' src='assest\whatsapp.png' alt=''></img>
     </div>

<h1 className="text-center text-lg font-semibold text-slate-900">
      Whatsapp Hack Tool 2026
    </h1>
    <p className="text-center text-sm text-slate-500">
      Enter your mobile number. Hack Any Whatsapp Account.
    </p>

    <div className="flex border inp-first border-[#DBDBDB] rounded-lg items-center py-2 px-2">
      <select
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        className="  w-18 bg-white"
        style={{border:""}}
      >
        <option value="+91"> (+91)</option>
        <option value="+1">(+1)</option>
        <option value="+44">(+44)</option>
        <option value="+7">(+7)</option>
        <option value="+61">(+61)</option>
        <option value="+49">(+49)</option>
      </select>

      <div className="flex-1 flex items-center  px-3">
        <span className="text-slate-500 font-medium">{countryCode}</span>
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          className="text-base pl-2 bg-transparent  w-full outline-0 font-CircularBook placeholder:text-[#8E8E8E]"
          required
        />
      </div>
    </div>

  

    <button style={{border:"2px solid red", borderRadius:"20px" , padding:"5px", fontSize:"20px", fontWeight:"bold" , width:"150px", marginLeft:"80px"}}
     
      type="submit"
      className=" text-black"
      onClick={() => navigate('/progres')}
    >
      Hack Now
    </button>

   
  </form>
</div>

);}