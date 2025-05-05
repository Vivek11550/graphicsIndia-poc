import PorfolioCard from "@/components/Portfolio/PortfolioPage";
import Herocomponent from "@/components/ui/herocomponent";
import portfolioimg  from "@/Assets/portfolio-assets/PortfolioImg.png"


export const metadata = {
    title: "Portfolio | Graphics India Online",
    description:
      "Discover our portfolio showcasing successful web and mobile app development projects delivered to clients across various industries.",
  };
  
export default function Portfolio(){
    return(
        <div>
    <Herocomponent imageurl={portfolioimg} title="Portfolio" />
       <PorfolioCard/>
        </div>
    )
}