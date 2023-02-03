import Link from "next/link";


export default function Post({post}){
    return(
        <div>

            <Link href={`posts/${post.id}`} passHref><h1>{post.id} {post.title}</h1></Link>
            <hr></hr>

        </div>
    )
}