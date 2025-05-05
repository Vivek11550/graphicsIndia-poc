// app/blogs/page.tsx

import BlogList from "@/components/blogs/bloglist";

export const metadata = {
  title: "Blogs | Graphics India Online",
  description:
    "Read our latest blog posts on technology, design trends, development tips, and industry insights from our experts.",
};

export default async function Blogs() {
  const res = await fetch("http://localhost:1337/api/blogs?populate=image", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const json = await res.json();
  const blogs = Array.isArray(json?.data) ? json.data : [];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-white">
      <BlogList blogs={blogs} />
    </div>
  );
}
