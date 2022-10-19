import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import {BsUpload} from 'react-icons/bs'
import Modal from './modal'
export default function Home() {
  const [Url, setUrl] = useState('');
  const [modalOn, setModalOn] = useState(false);
  const [showResp, setShowResp] = useState("");
  const showresp = (message) =>{
    setModalOn(true)
    setShowResp(message)
  }
  const handleDaftar = () =>{
    axios.post(`http://localhost:8000/link/${Url}`,{

    })
    .then(function(response){
      
    })
    .catch((e)=>{
      showresp(e.response.statusText)
    })
  }
  return (
   <div className='w-full font-poppins flex min-h-screen bg-gradient-to-b from-[#D9AFD9] to-[#97D9E1]'>
      <div className='flex flex-col m-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 sm:p-10 p-6 rounded-lg'>
          <label htmlFor="url" className='sm:text-3xl text-xl font-semibold pb-5'>Urlnya apa ngab ?</label>
        <div className='relative'>
          <input className='rounded-md border-2 active:border-black sm:text-lg text-base p-2 w-full grow-[2]' id="url" type="text" onChange={(event)=>setUrl(event.target.value)} value={Url} placeholder="Masukkan url"/>
          <button className='absolute  top-3 right-3' onClick={()=>handleDaftar()}><BsUpload/></button>
          </div>
      </div>
      {modalOn && < Modal setModalOn={setModalOn} showResp={showResp} />}
   </div>
  )
}