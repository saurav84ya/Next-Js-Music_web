"use client";


import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";



const projects = [
    {
      title: "Spotify",
      description:
        "A music streaming platform that offers a vast library of songs, playlists, and podcasts, allowing users to discover and enjoy music from various genres.",
      link: "https://spotify.com",
    },
    {
      title: "Apple Music",
      description:
        "A subscription-based music streaming service that offers access to millions of songs, curated playlists, and exclusive content.",
      link: "https://music.apple.com",
    },
    {
      title: "SoundCloud",
      description:
        "A platform for artists to share and promote their music, allowing users to discover independent artists and tracks from various genres.",
      link: "https://soundcloud.com",
    },
    {
      title: "YouTube Music",
      description:
        "A music streaming service developed by YouTube, allowing users to listen to songs and watch music videos from a vast catalog.",
      link: "https://music.youtube.com",
    },
    {
      title: "Tidal",
      description:
        "A subscription-based music streaming service that offers high-fidelity sound quality and exclusive content from various artists.",
      link: "https://tidal.com",
    },
    {
      title: "Deezer",
      description:
        "A music streaming service that offers a large catalog of songs and playlists, personalized recommendations, and offline listening.",
      link: "https://deezer.com",
    },
  ];
  


export default function FourthPage() {
  return (
   
   <>
   <div className='h-auto bg-red-500  overflow-hidden ' >
    <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute h-auto pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="max-w-5xl mx-auto px-8">
              <h1 className='ml-10 mt-10 font-bold'>Our Platforms</h1>
            <HoverEffect items={projects} />
            </div>

      </div>
   </div>
   </>
  )
}
