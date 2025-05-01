import BlogList from "@/components/blogs/bloglist";


export const metadata = {
  title: "Blogs | Graphics India Online",
  description:
    "Read our latest blog posts on technology, design trends, development tips, and industry insights from our experts.",
};

export default function Blogs() {
  return (
    <div className="px-6 py-12 max-w-7xl  mx-auto bg-white">
     <BlogList/>
    </div>
  );
}
