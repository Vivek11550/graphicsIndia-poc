import Image from 'next/image';

interface ImageFormat {
  url: string;
}

interface ImageFormats {
  medium?: ImageFormat;
  [key: string]: ImageFormat | undefined;
}

interface BlogImage {
  formats?: ImageFormats;
  url?: string;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image?: BlogImage[];
}

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  if (!blogs?.length) return <p>No blogs found.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => {
        const {
          id,
          title,
          slug,
          excerpt,
          author,
          date,
          image,
        } = blog;

        const imageUrl = image?.[0]?.formats?.medium?.url || image?.[0]?.url || "";

        return (
          <div key={id} className="bg-slate-50 p-4 rounded-lg shadow">
            {imageUrl && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`}
                alt={title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-xl font-bold mt-4 text-black">{title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {author} | {new Date(date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">{excerpt}</p>
            <a
              href={`/blog/${slug}`}
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              Read More →
            </a>
          </div>
        );
      })}
    </div>
  );
}
