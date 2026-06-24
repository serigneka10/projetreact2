import { GlobeLock } from "lucide-react";



function SectionHero() {
  return (
    <div>
      <div className="flex flex-col mt-32 justify-center items-center md:mt-32">
       
        <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-wide text-center">VirtualR build tools 
        <span className="bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent"> for <br /> developers</span>  
       </h1>
        <p className="mt-10 text-neutral-500 text-xl max-w-4xl md-text-xs p-4 ">Empower your creativity and bring your VR app ideas to live whith our intuitive developement tols. <br /> Get started today and tourn your imagination into imersive reality! </p>
      </div>

      <div className="gap-3 flex  justify-center items-center flex-col md:flex-row   mt-10  ">

        <button className="px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
           Start for free
          </button>
          <button className="px-4 py-1 border rounded-md">
            Documentation
          </button>
        </div>

<div className="flex gap-6 flex-wrap justify-center mt-14">

  {/* Vidéo 1 */}
  <video autoPlay muted loop
    className="w-96 rounded-xl shadow-lg"
    controls
  >
    <source src="/assets/video1.mp4" type="video/mp4" />
   
  </video>

  {/* Vidéo 2 */}
  <video autoPlay muted loop
    className="w-96 rounded-xl shadow-lg"
    controls
  >
    <source src="/assets/video2.mp4" type="video/mp4" />
    <GlobeLock className="text-orange-800" />
   
  </video>

</div>

    </div>
  );
}

export default SectionHero;
