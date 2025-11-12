// app/blog/[slug]/page.tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    notFound();
  }

  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <div className="min-h-screen bg-background py-22">
      <article className="max-w-[85rem] mx-auto px-6 lg:px-8">
        {/* Header Section - Centered with proper spacing */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-base text-muted-foreground">
            <time className="font-medium">{frontmatter.date}</time>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
            <span className="font-medium">{frontmatter.readTime}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
            <span className="font-semibold text-foreground">
              {frontmatter.author}
            </span>
          </div>
        </header>

        {/* Divider */}
        <div className="mb-16 border-t border-border"></div>

        {/* Content Section with PROPER prose styling */}
        <div
          className="prose max-w-none
    /* Base typography */
    prose-p:text-foreground/80
    prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
    prose-p:font-normal
    
    /* Headings - Reduced top margins for tighter layout */
    prose-headings:font-semibold prose-headings:tracking-tight 
    prose-headings:text-foreground
    prose-headings:scroll-mt-24
    
    prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-4 prose-h1:leading-tight
    prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:leading-snug
    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:leading-snug
    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2.5
    
    /* First paragraph after heading - remove extra spacing */
    prose-headings:first:mt-0
    
    /* Links */
    prose-a:text-primary
    prose-a:no-underline prose-a:font-medium
    hover:prose-a:underline hover:prose-a:opacity-80
    prose-a:transition-colors prose-a:duration-200
    
    /* Strong & emphasis */
    prose-strong:text-foreground
    prose-strong:font-semibold
    prose-em:text-foreground/90
    
    /* Inline code */
    prose-code:text-primary
    prose-code:bg-muted
    prose-code:px-1.5 prose-code:py-0.5 
    prose-code:rounded-md prose-code:font-mono 
    prose-code:text-sm prose-code:font-medium
    prose-code:before:content-none prose-code:after:content-none
    prose-code:border prose-code:border-border
    
    /* Code blocks */
    prose-pre:bg-[#1e1e1e]
    prose-pre:border prose-pre:border-gray-800
    prose-pre:rounded-lg prose-pre:my-6 prose-pre:p-4
    prose-pre:overflow-x-auto prose-pre:shadow-xl
    prose-pre:ring-1 prose-pre:ring-gray-900/10
    
    prose-pre:prose-code:bg-transparent prose-pre:prose-code:p-0
    prose-pre:prose-code:text-gray-100 prose-pre:prose-code:border-0
    prose-pre:prose-code:font-normal prose-pre:prose-code:text-sm
    
    /* Blockquotes */
    prose-blockquote:border-l-4 prose-blockquote:border-primary
    prose-blockquote:bg-muted/50
    prose-blockquote:py-3 prose-blockquote:px-5 
    prose-blockquote:my-6 prose-blockquote:rounded-r-lg
    prose-blockquote:shadow-sm
    
    /* Lists */
    prose-ul:my-5 prose-ul:space-y-2
    prose-ol:my-5 prose-ol:space-y-2
    prose-li:text-foreground/80
    prose-li:text-base prose-li:leading-relaxed
    prose-li:marker:text-muted-foreground
    prose-li:marker:font-semibold
    
    /* Nested lists */
    prose-li:prose-ul:my-2 prose-li:prose-ol:my-2
    
    /* Images */
    prose-img:rounded-lg prose-img:shadow-xl 
    prose-img:my-8 prose-img:w-full
    prose-img:border prose-img:border-border
    
    /* Horizontal rules */
    prose-hr:my-8 prose-hr:border-border
    prose-hr:border-t-2
    
    /* Tables */
    prose-table:my-8 prose-table:border-collapse 
    prose-table:w-full prose-table:shadow-md
    prose-table:rounded-lg prose-table:overflow-hidden
    
    prose-thead:bg-muted
    prose-thead:border-b-2 prose-thead:border-border
    
    prose-th:px-4 prose-th:py-3 prose-th:text-left
    prose-th:font-semibold prose-th:text-foreground
    prose-th:text-sm prose-th:uppercase prose-th:tracking-wide
    
    prose-td:px-4 prose-td:py-3 prose-td:border-t
    prose-td:border-border
    prose-td:text-foreground/80 prose-td:text-sm
    
    prose-tbody:prose-tr:hover:bg-muted/50
    prose-tbody:prose-tr:transition-colors
    
    /* Figure */
    prose-figure:my-8
    prose-figcaption:text-center prose-figcaption:text-sm
    prose-figcaption:text-muted-foreground prose-figcaption:mt-2 prose-figcaption:italic
    
    /* Overall rhythm improvements */
    [&>*:first-child]:mt-0
    [&>*:last-child]:mb-0
  "
        >
          <MDXRemote source={content} />
        </div>

        {/* Back Button with better styling */}
        <div className="mt-24 pt-12 border-t-2 border-border">
          <a
            href="/blog"
            className="inline-flex items-center gap-3 text-lg font-semibold text-primary hover:opacity-80 transition-all duration-200 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </a>
        </div>
      </article>
    </div>
  );
}
