import Link from "next/link";



export default function Home() {
  return (
    <>
  
    <h1>Home page</h1>
    
    <Link href={'/users'}><h1>
    Users</h1></Link>


    <Link href={'/posts'}><h1>
    Posts</h1></Link>


    </>
  )
}
