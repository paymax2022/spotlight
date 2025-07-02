import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"
import BlogDetailsClient from "./BlogDetailsClient"

export default function BlogDetailsPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const blogPost = data.find((post: { id: number }) => String(post.id) === String(id)) || null;
    return (
        <Layout>
            <BlogDetailsClient blogPost={blogPost} />
        </Layout>
    );
}

export async function generateStaticParams() {
    // Return all possible blog post IDs as strings
    return data.map((post: { id: number }) => ({ id: post.id.toString() }));
}
