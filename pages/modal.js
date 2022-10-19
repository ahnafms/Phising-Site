import React from 'react'

export default function modal(setModalOn, showResp) {
  const handleOkClick = () =>{
    setModalOn(false)
  }
  return (
    <div className="bg-slate-500 opacity-[0.95] fixed inset-0 z-50 ">
            <div className="flex  h-screen w-full justify-center items-center ">
                <div className="flex-col justify-center  bg-white py-8 border-4 rounded-2xl shadow-lg ">
                    <div className="py-5 px-4 sm:px-10 xs:px-8 lg:px-10 ease-in-out duration-300 transition-opacity">
                        <div className={"flex w-full font-bold xs:text-md  md:text-lg  text-zinc-600 mb-5  text-sm text-center " }>{showResp}</div>
                        <div className="flex">
                            <button onClick={handleOkClick} className="m-auto rounded w-full py-2 text-white md:text-xl text-sm  bg-red-400 ">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
