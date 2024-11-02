"use client"
import React, { useState } from 'react';
import { Vortex } from "@/components/ui/vortex";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";



export default function page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Name:', name);
       console.log('Email:', email);
       console.log('Message:', message);
       setName('');
       setEmail('');
       setMessage('');
     };
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div>
        <div className="bg-[#100D25  mt-20 border-[5px] border-double border-blue-500
        text-white py-[10px] px-[20px] rounded-[10px] ">
            
      <h2 className="text-3xl  font-bold mt-4 mb-8">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-bold">
            Your Name
          </label>
          <Input
            type="text"
            id="name"
            className="mt-1 w-[300px] p-2 border-2 rounded-md border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What's your good name?"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-bold">
            Your Email
          </label>
          <Input
            type="email"
            id="email"
            className="mt-1 p-2 border-2 rounded-md border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="What's your web address?"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-bold">
            Your Message
          </label>
          <Input
            id="message"
            className="mt-1 p-2 border-2 rounded-md border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What you want to say?"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Send
        </button>
      </form>   

    </div>
        </div>
      </Vortex>
    </div>
  )
}
