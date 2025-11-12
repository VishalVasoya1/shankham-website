// lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  views: string;
  featured: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
}

export interface PostWithContent {
  frontmatter: PostFrontmatter;
  content: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(source);
      const slug = file.replace(/\.mdx$/, "");

      return {
        ...(data as PostFrontmatter),
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostWithContent {
  if (!slug) {
    throw new Error("Slug is required");
  }

  const filePath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}
