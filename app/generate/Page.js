"use client"
// import { Code } from 'mongodb'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='flex flex-col  m-10  p-7 gap-5  md:mx-auto  max-w-md bg-purple-200 rounded-xl shadow-xl'>
      <h1 className='font-bold  text-center text-lg md:text-2xl'>Generate your short URL</h1>
      <div className='flex flex-col  gap-3 '>
        <input value={url} className='text-[10px] md:text-base rounded-md py-1 md:py-3 px-2 md:px-4 bg-white focus:outline-purple-600  ' type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input value={shorturl} className='text-[10px] md:text-base rounded-md py-1 md:py-3 px-2 md:px-4  bg-white focus:outline-purple-600 ' type="text" placeholder='Enter your prefered short URL text' onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} className='text-xs md:text-lg bg-purple-500 hover:bg-purple-700 rounded shadow-xl p-1.5 py-1 my-3 font-bold text-white'>Generate</button>
      </div>
      {generated && <><code>
        <span className='text-[10px] md:text-lg'>
      Your Link :
        </span>
        <Link className='text-[10px] md:text-lg text-purple-700 md:m-2' href={generated} target='_blank'>{generated}</Link>
        </code></>}
    </div>
  )
}

export default page




