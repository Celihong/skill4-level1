import { useState } from "react";
const [data, setData] = useState([]);

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts/5")
  .then((data)=> {setData(data)})
  .catch((error) => console.error(error))
})

console.log(data)