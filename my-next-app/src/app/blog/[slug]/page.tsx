// app/blog/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';


const allBlogs = {
  'scale-your-app-with-cloud': {
    title: 'How to Scale Your App with Cloud Solutions',
    author: 'Vivek Kumar',
    date: 'April 20, 2025',
    image: '/images/cloud-scaling.jpg',
    content: `
      <p>Scaling your app is crucial as your user base grows...</p>
      <blockquote class='border-l-4 border-indigo-500 pl-4 italic text-gray-700'>Cloud computing is not just a trend, it's the future.</blockquote>
      <p>Popular platforms include AWS, Azure, GCP...</p>
    `,
    tags: ['#cloud', '#scaling', '#infrastructure'],
  },
  'future-of-ai-in-business': {
    title: 'The Future of AI in Business Applications',
    author: 'Aisha Mehta',
    date: 'April 22, 2025',
    image: '/images/ai-future.jpg',
    content: `
      <p>Artificial Intelligence is becoming the backbone of decision-making and automation...</p>
      <blockquote class='border-l-4 border-indigo-500 pl-4 italic text-gray-700'>“AI is not the future, it is the present.”</blockquote>
      <p>AI-powered support, predictive analytics, workflow optimization...</p>
    `,
    tags: ['#AI', '#Business', '#Innovation'],
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = allBlogs[slug as keyof typeof allBlogs];

  if (!blog) return <div className="p-10 text-center text-xl">Blog not found!</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        <span>👤 {blog.author}</span> | <span>📅 {blog.date}</span>
      </div>
      <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-xl mb-8" />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      <div className="mt-8">
        <h4 className="font-semibold mb-2">Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
