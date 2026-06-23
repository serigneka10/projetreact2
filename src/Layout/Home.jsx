import PageFooter from "../components/footer";

import Navbar from "../components/menunav";
import PageSection2 from "../components/section2";
import PageSection3 from "../components/section3imgcode";
import PageSection4 from "../components/section4prix";
import SectionHero from "../components/SectionHero";
import PageTemoignage from "../components/temoignage";


export default function Home() {
  return (
    <div>
        <>
      <Navbar />
      <SectionHero />
      <PageSection2 />
       <PageSection3/>
       <PageSection4/>
       <PageTemoignage/>
        <PageFooter/>
        
       </>

    </div>
  )
}
