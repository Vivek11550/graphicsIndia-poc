
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact| Graphics India Online | Camp, Pune Office",
  description:
    "Let's build your next digital product! Get in touch with our team offering web and mobile app development services from our Camp, Pune location. ",
  alternates: {
    canonical: "https://graphicsindiaonline.com/reach-us-camp-pune/",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}