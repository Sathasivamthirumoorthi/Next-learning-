import Post from "../../components/post"


export default function PostList({posts}){
    return (
        <div>
            <h1>Post List</h1>
            <hr></hr>


            {
                posts.map(post =>{

                    return( 
                        <div key={post.id}> 
                        <Post post={post} />
                        </div>
                    )
                })
            }


        </div>
    )
}

export async function getStaticProps(){
    
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await responce.json() 

    console.log(data)

    return {
        props : {
            posts : data
        }
    }


}