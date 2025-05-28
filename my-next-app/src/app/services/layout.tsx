
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web & Mobile App Development Services",
  description:
    "Explore high-quality web and mobile app development services tailored for startups and enterrises.Serving Clients across pune and beyond ",
  alternates: {
    canonical: "https://graphicsindiaonline.com/web-mobile-solutions/",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}