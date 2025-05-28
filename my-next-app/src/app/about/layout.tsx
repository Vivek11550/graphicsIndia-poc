
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Design & Development Experts",
  description:
    "Learn more about our team of web/app developers,WordPress experts,designers, and marketers building digital experiences that deliever results.",
  alternates: {
    canonical: "https://https://graphicsindiaonline.com/about-graphics-india-online/",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}