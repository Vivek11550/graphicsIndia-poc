import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

interface BlogData {
  id: number;
  attributes: {
    slug: string;
    [key: string]: unknown; // for any additional attributes
  };
}





// ✅ Optional: Pre-generate paths for SSG
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs`);
  const data = await res.json();
  const blogs :BlogData[] = data?.data || [];

  return blogs.map((blog) => ({
    slug: blog.attributes.slug,
  }));
}

// ✅ Metadata without accessing blog.attributes
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=image`);
  const json = await res.json();
  const blog = json?.data?.[0];

  if (!blog) return notFound();

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

// ✅ Blog Page
export default async function BlogPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=image`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const json = await res.json();
  const blog = json?.data?.[0];

  if (!blog) return notFound();

  // ✅ Your actual blog structure
  const { title, author, date, content, image } = blog;

  const imageData = image?.[0];
  const imageUrl = imageData?.formats?.large?.url || imageData?.url || "";
  const fullImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white text-black">
      {imageUrl && (
        <Image
          src={fullImageUrl}
          alt={title}
          width={800}
          height={450}
          className="w-full h-auto rounded mb-6 object-cover"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{title}</h1>

      <p className="text-sm text-gray-600 mb-8">
        {author} | {new Date(date).toLocaleDateString()}
      </p>

      <article className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
