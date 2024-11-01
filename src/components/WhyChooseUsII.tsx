


"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracking-beam";
 

const dummyContent = [
  {
    title: "Our Auditorium",
    description: (
      <>
        <p>
          Our auditorium is a state-of-the-art facility where students and guests can gather for a variety of events such as performances, seminars, and lectures. With top-notch acoustics and modern seating arrangements, it ensures that every attendee has a memorable and comfortable experience.
        </p>
        <p>
          The auditorium is designed to inspire creativity and engagement, providing an ideal space for both formal and informal gatherings.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1458639817867-2c9d4c5dcad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhdWRpdG9yaXVtfGVufDB8fDB8fHww"
  },
  {
    title: "Our Class",
    description: (
      <>
        <p>
          Our classrooms are thoughtfully designed to foster a conducive learning environment. Equipped with modern amenities such as smart boards and ergonomic seating, these spaces promote interactive learning and collaboration among students.
        </p>
        <p>
          The classrooms provide ample lighting and are arranged to encourage participation and group activities, ensuring that students remain engaged and motivated.
        </p>
      </>
    ),
    image: "https://plus.unsplash.com/premium_photo-1682377780180-75c829427d85?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Our Library",
    description: (
      <>
        <p>
          Our library serves as the heart of knowledge and research, offering an extensive collection of books, journals, and digital resources. It is a quiet haven where students can focus on their studies, conduct research, or simply unwind with their favorite literature.
        </p>
        <p>
          The library is equipped with comfortable seating and a peaceful ambiance, making it the perfect place for both individual and group study sessions.
        </p>
      </>
    ),
    image: "https://plus.unsplash.com/premium_photo-1698084059435-a50ddfd69303?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];



export default function WhyChooseUsII() {
  return (
    <div className="h-auto overflow-hidden"  >
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <p className="text-xl ml-4 mb-4">{item.title}</p>
              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={`Image of ${item.title}`}
                    height={1000}
                    width={1000}
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
  
}
