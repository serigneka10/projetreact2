import {  BatteryCharging, BotMessageSquare,    Fingerprint, GlobeLock, ShieldHalf } from "lucide-react";




function PageSection2() {
    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                {/* <div className=""></div> */}

                <h4 className="text-orange-700 tracking-normal flex justify-center items-center bg-neutral-900 inline-block px-2 text-3xl text-ceneter rounded-md">FEATURE</h4>
                <p className="text-3xl md:text-5xl mt-18">Easily build
                    <span className="bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent"> your code</span></p>

            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-16">

                    <div className="flex-1 ">
                        <div className="flex items-center gap-2 ">
                            <BotMessageSquare className="text-orange-800" />
                            <p>Drag-and-drop interface</p>
                        </div>
                        <p className="text-neutral-600 mt-4">
                            Easily design and arrange your VR environments with a user-friendly <br /> interface.
                        </p>
                    </div>
 
                    <div className="flex-1">
                        <div className="flex items-center gap-2 ">
                            <Fingerprint className="text-orange-800" />
                            <p>Multi platform compatitbility</p>
                        </div>
                        <p className="text-neutral-600 mt-4">
                            Build VR applications that run seamlessly across multiple platforms, <br /> including mobile, desktop, and VR <br />
                            headsets.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-2 ">
                            <ShieldHalf className="text-orange-800" />
                            <p>Built in tamplates</p>
                        </div>
                        <p className="text-neutral-600 mt-4">
                            Jumpstart your VR projects with a variety of built-in templates for different types of <br /> applications and environments.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-16">

                    <div className="flex-1 ">
                        <div className="flex items-center gap-2 ">
                            <BatteryCharging className="text-orange-800" />
                            <p>Real time preview</p>
                        </div>
                        <p className="text-neutral-600 mt-4">
                            Easily design and arrange your VR environments with a user-friendly <br /> interface.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-2 ">
                            <BatteryCharging  className="text-orange-800" />
                            <p>Collaboration tools</p>
                        </div>
                        <p className="text-neutral-600 mt-4">
                            Build VR applications that run seamlessly across multiple platforms, <br /> including mobile, desktop, and VR <br />
                            headsets.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-2 ">
                            <GlobeLock className="text-orange-800" />
                            <p>Drag-and-drop interface</p>
                        </div>
                        <p className="text-neutral-600 mt-4">
                            Jumpstart your VR projects with a variety of built-in templates for different types of <br /> applications and environments.
                        </p>
                    </div>

                </div>
            </div>  
        </div>
    )
}



export default PageSection2;