"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Guitar Fundamentals",
    description:
      "Learn the basics of playing guitar with our comprehensive beginner's course.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3VpdGFyfGVufDB8fDB8fHww"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Guitar Fundamentals"
        />
      </div>
    ),
  },
  {
    title: "Piano Essentials",
    description: "Start your piano journey with foundational techniques and songs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGlhbm98ZW58MHx8MHx8fDA%3D"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Piano Essentials"
        />
      </div>
    ),
  },
  {
    title: "Vocal Training Basics",
    description: "Develop your singing skills and learn vocal exercises for beginners.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681263751033-259d63fa0215?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Vm9jYWx8ZW58MHx8MHx8fDA%3D"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Vocal Training Basics"
        />
      </div>
    ),
  },
  {
    title: "Drumming Techniques",
    description: "Master the art of drumming with foundational skills and beats.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://plus.unsplash.com/premium_photo-1702220261651-05249c445dda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHJ1bW1pbmd8ZW58MHx8MHx8fDA%3D"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Drumming Techniques"
        />
      </div>
    ),
  },
  {
    title: "Advanced Music Theory",
    description: "Delve deep into music theory concepts and enhance your music composition skills.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzaWN8ZW58MHx8MHx8fDA%3D"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Advanced Music Theory"
        />
      </div>
    ),
  },
  {
    title: "Electronic Music Production",
    description: "Learn to create your own electronic music tracks using popular software.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1653569395995-39daf1602fb2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVsZWN0cm9uaWMlMjBNdXNpYyUyMFByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Electronic Music Production"
        />
      </div>
    ),
  },
];

export default function WhyChooseUs() {
  return (
      <StickyScroll content={content} />
  );
}
