import HeroAbout from "@/components/about/heroabout";

import Whoweare from "@/components/about/whoweare";

export const metadata = {
  title: "About Us | Graphics India Online ",
  description: "Learn more about our mission, vision, and team.",
};
export default function About() {
  return (
    <div>
      <HeroAbout />
      <Whoweare />
    </div>
  );
}
