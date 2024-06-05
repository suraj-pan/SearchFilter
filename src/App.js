import { useEffect, useState } from "react";
import "./App.css";
import Interface from "./Interface";

function App() {

    const [data,setdata] = useState([])
    const[search,setsearch] = useState("")
    const[filter,setfilter] = useState([])

    const searchHandle = (e)=>{
      setsearch(e.target.value)
    }

  async function dataCall(){
   try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let res=  await data.json()
    // console.log(res)
    setdata(res)
    setfilter(res)
   } catch (error) {
      console.error(error)
   }
  }

  useEffect(()=>{
    dataCall()
  },[])


  useEffect(()=>{

      let result = data.filter((d)=> d.title.includes(search) )
      console.log(result)
      setfilter(result)
  },[search])
 
  return (
    <div class="mx-auto w-full h-full bg-slate-500 flex-col relative  ">
     <h1 className="w-full h-[40px]  text-3xl text-center">Post </h1>
     <input className="text-center  mt-2 mb-3 absolute left-10 bg-slate-100 p-2 mx-auto" placeholder="type here" value={search} onChange={searchHandle} />
    <Interface  data={filter} />
    </div>
  );
}

export default App;
