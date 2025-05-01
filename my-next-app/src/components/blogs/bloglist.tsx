

'use client';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'How to Scale Your App with Cloud Solutions',
    excerpt: 'Discover strategies to effectively scale your app using modern cloud technologies...',
    author: 'Vivek Kumar',
    date: 'April 20, 2025',
    image: '/images/cloud-scaling.jpg',
    slug: 'scale-your-app-with-cloud',
  },
  {
    id: 2,
    title: 'The Future of AI in Business Applications',
    excerpt: 'Learn how artificial intelligence is transforming industries and creating smarter workflows...',
    author: 'Aisha Mehta',
    date: 'April 22, 2025',
    image: '/images/ai-future.jpg',
    slug: 'future-of-ai-in-business',
  }
];




export default function BlogList() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-10">Our Latest Insights</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl text-black font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
              <Link href={`/blog/${blog.slug}`}>
                <span className="text-indigo-600 hover:underline font-medium">Read More →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
