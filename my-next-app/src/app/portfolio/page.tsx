import PorfolioCard from "@/components/Portfolio/PortfolioPage";


export const metadata = {
    title: "Portfolio | Graphics India Online",
    description:
      "Discover our portfolio showcasing successful web and mobile app development projects delivered to clients across various industries.",
  };
  
export default function Portfolio(){
    return(
        <div>
       <PorfolioCard/>
        </div>
    )
}