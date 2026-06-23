import { CircleCheck } from "lucide-react";


function PageSection3() {
  return (
    <div>
      <p className="text-xl gap-2 md:text-5xl flex justify-center items-center">Accelerate your  <span className="bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent">  codinG workflow</span> </p>

      <div className="mt-12 md:flex justify-center items-center gap-16">

        <div> <img className="md:w-90 h-90 justify-enter items-center  ml-4  md:w-1/2" src="/assets/code.jpg" alt="" /></div>

        <div className="flex flex-col p-5  space-y-8">
          <p className="flex gap-4 text-xl md:5xl "><CircleCheck className="text-green-800 flex justify-center" />Code merge made easy</p>

          <p className="flex gap-4 text-xl md:5xl"><CircleCheck className="text-green-800 flex justify-center" />Review code wethout worry</p>

          <p className="flex gap-4 text-xl md:5xl"><CircleCheck className="text-green-800 flex justify-center" />All assistante to reuce time</p>

          <p className="flex gap-4 text-xl md:5xl"><CircleCheck className="text-green-800 flex justify-center" />Share work in minute</p>

        </div>
      </div>

    </div>
  )
}





export default PageSection3;