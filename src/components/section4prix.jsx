import { CircleCheckBig, DollarSign } from "lucide-react";


function PageSection4() {
    return (
        <div className="p-4 mt-10">

            <p className="text-2xl flex justify-center items-center mt-8 md:text-3xl">Pricing</p>

            <div className="grid grid-1 justify-cenetr items-center md:flex flex-row justify-center items-center gap-5">

                <div className="border border-neutral-700 rounded inline-block space-y-6 mt-12 py-4 px-8">
                    <p className="flex justify-center items-center text-2xl">Free</p>
                    <p className="flex text-2xl "><DollarSign className="mt-1" /> 0 <span className="text-neutral-500 mt-2 text-sm">/Month</span></p>

                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Private power sharing</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />5GB storage</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Web anlytic</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Private mode</p>
                    <button className="block mx-auto border border-orange-600 rounded-md py-1 px-14 ">Subsribe</button>
                </div>

                 <div className="border border-neutral-700 rounded inline-block space-y-6 mt-12 py-4 px-8">
                    <p className="flex justify-center items-center text-2xl">Pro <span className="bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent text-xs mt-4">(Most popular)</span> </p>
                    <p className="flex text-2xl "><DollarSign className="mt-1" /> 10 <span className="text-neutral-800 mt-2 text-sm">/Month</span></p>

                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Private power sharing</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />5GB storage</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Web anlytic</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Private mode</p>
                    <button className="block mx-auto border border-orange-600 rounded-md py-1 px-14">Subsribe</button>
                </div>

                 <div className="border border-neutral-700 rounded inline-block space-y-6 mt-12 py-4 px-8">
                    <p className="flex justify-center items-center text-2xl">Entreprise</p>
                    <p className="flex text-2xl "><DollarSign className="mt-1" /> 200 <span className="text-neutral-500 mt-2 text-sm">/Month</span></p>

                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Private power sharing</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />5GB storage</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Web anlytic</p>
                    <p className="flex gap-5 text-neutral-400"><CircleCheckBig />Private mode</p>
                    <button className="block mx-auto border border-orange-600 rounded-md py-1 px-14">Subsribe</button>
                </div>
            </div>

        </div>

    )
}

export default PageSection4;