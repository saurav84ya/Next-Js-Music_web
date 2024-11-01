import courseData from "@/data/music_courses.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="bg-#1A1A19 overflow-hidden pb-20">
      <div>
        <div className="text-center mt-20">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {featuredCourses.map((course: Course) => (
              <CardContainer key={course.id} className="flex p-6 flex-col items-center rounded-lg cursor-pointer shadow-md">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white   "
                  >
                    
                    <h1 className="text-2xl" >{course.title}</h1>                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>

                  <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                    <Image
                      src={course.image}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      <h1 className="text-xl" >Instructor: {course.instructor}</h1>
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <h1>Price: ${course.price}</h1>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
        <div className=" mx-auto text-center">
          <button
            className="text-teal-600 hover:text-white duration-500 font-bold p-2 bg-white hover:bg-teal-600 transform hover:scale-105 border-8 border-teal-600 rounded-lg"
            aria-label="View All Courses"
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
