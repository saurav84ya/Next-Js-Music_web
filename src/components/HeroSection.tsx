import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


export default function HeroSection() {
    return (
        <div
            className="h-screen w-full rounded-md flex 
            flex-col items-center justify-center relative 
            overflow-hidden mx-auto py-10 md:py-0"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
            />
            <div className="p-4 relative mt-10 pt-10 z-10 w-full text-center">
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-500">
                    Master the art of music
                </h1>
                <p className="mt-7 p-4 font-normal text-lg md:text-2xl text-neutral-300 max-w-lg mx-auto">
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-5">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Learn More.....
                    </Button>
                </div>
            </div>
        </div>
    );
}
