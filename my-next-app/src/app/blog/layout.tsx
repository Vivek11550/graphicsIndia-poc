
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights on App & Web Development Trends",
  description:
    "Read the latest articles and tips on mobile and web app development, emerging tech,and digital strategies from experts at Graphics India Online.",
  alternates: {
    canonical: "https://https://graphicsindiaonline.com/blog-web-mobile-insights/",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}