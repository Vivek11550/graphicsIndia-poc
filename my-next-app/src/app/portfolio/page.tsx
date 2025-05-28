import PorfolioCard from "@/components/Portfolio/PortfolioPage";
import Herocomponent from "@/components/ui/herocomponent";
import portfolioimg  from "@/Assets/portfolio-assets/PortfolioImg.png"



  
export default function Portfolio(){
    return(
        <div>
    <Herocomponent imageurl={portfolioimg} title="Projects that drive impact" 
      subtitle="Explore our work and see how we've helped businesses succeed through smart,user-focused digital solution"/>
       <PorfolioCard/>
        </div>
    )
}