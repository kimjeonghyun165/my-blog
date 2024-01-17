import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { Layout } from "@/components/layout/Layouts";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export const generatedStaticParams = async () => {
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generatedMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <div className="prose max-w-3xl mx-auto text-sm md:text-lg">
        <div className="mb-8 text-center">
          <figure className="flex justify-center">
            <img
              src={post.image}
              className="border-base-content bg-base-300 rounded-box border border-opacity-5"
            />
          </figure>
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <MDXContent components={mdxComponents} />
      </div>
    </Layout>
  );
}
