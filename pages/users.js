import User from "../components/user"

export default function UsersList({users}) {
    return (
      <>
    
      <h1>User List page</h1>
      {
        users.map(user=>{
          return(
            <div key={user.id}>
            <User user = {user}/>  
            </div>
          )
        })
      }
      </>
    )
}

// in next , u can export an async function 
// it runs on built time 
// it can fetch data on a build time and we can pass it as props to the pages 
// example : e - commerce , blogs etc ... 
// getStaticProps 
	
// 	Runs only on server side 
// 	The function will never included in JS bundle 
// 	We can write server-side code directly inside it 
// 	 Accessing Fs module or querying a database can done inside getStaticProps 
// 	API is hidden because it is running on server side 
// 	Write Only in page 
// It is used only for pre-rendering not CS data fetching


// It should return an object * props key is !important 

// In production : 
// Run at build time 

// In development 
// Run at every request 



export async function getStaticProps(){
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
 
    const data = await responce.json()

    console.log(data)

    return {
      props : {
        users : data
      }
    }

}

// Error: Your `getStaticProps` function did not return an object. Did you forget to add a `return`?

