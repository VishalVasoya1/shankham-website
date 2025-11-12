// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts, Post } from "@/lib/mdx";

export default function BlogPage() {
  const posts: Post[] = getAllPosts();

  return (
    <div className="max-w-[85rem] mx-auto py-22 min-h-screen">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-block mb-3">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Team insights
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Insights, tutorials, and updates from our team
        </p>
      </div>

      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid gap-8 md:gap-10">
          {posts.map((post, index) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex flex-col gap-3">
                  {/* Meta information */}
                  <div className="flex items-center gap-3 text-sm">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 transition-colors group-hover:bg-gray-200">
                      {post.category}
                    </span>
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author and stats */}
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="font-medium text-gray-700">
                      {post.author}
                    </span>
                    <span className="text-gray-500">{post.views} views</span>
                  </div>
                </div>
              </Link>

              {/* Divider - except for last item */}
              {index < posts.length - 1 && (
                <div className="mt-8 md:mt-10 border-t border-gray-200" />
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No posts yet
          </h3>
          <p className="text-gray-600">Check back soon for new content.</p>
        </div>
      )}
    </div>
  );
}
