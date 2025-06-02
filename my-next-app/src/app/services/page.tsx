import Heroservices from "../../components/services/heroservices"
import Cards  from "../../components/services/Cards"
import Whychoseus  from "../../components/services/whychoseus"
import BusinessService from "@/components/services/business-service";
import DigitalGrowth from "@/components/services/digitalgrowth";


export const metadata = {
    title: "Our Services | Graphics India Online",
    description:
      "Explore our wide range of services including web development, app development, UI/UX design, and ERP solutions tailored for your business.",
  };
  

export default function Services(){
    return(
        <div className="bg-white ">
        <Heroservices/>
        <Cards />
        <BusinessService/>
        <DigitalGrowth/>
        <Whychoseus/>
        
        </div>
    )
}