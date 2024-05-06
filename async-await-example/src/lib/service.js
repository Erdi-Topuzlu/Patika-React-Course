import axios from "axios"

export default async function getData(id) {
  
  const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/" + id);
  const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts/" + id);

  console.log(user);
  console.log(posts);
}