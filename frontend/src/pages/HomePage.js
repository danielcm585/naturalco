import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

export default function HomePage() {
  const [ data, setData ] = useState([]);
  const [ page, setPage ] = useState(1);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://us-central1-test-naturalco.cloudfunctions.net/getData", 
        { page }
      );
      setData((prev) => [ ...prev, ...resp.data ]);
      setPage((prev) => prev+1);
    } catch (error) {
      console.log(error.message);
    }
  };  
  
  useEffect(() => {
    fetchData();
    
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      fetchData();
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      setData([]);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-6">
        <div className="sm:w-[60%] w-[85%]">
          <UserList data={data} />
        </div>
      </div>
    </>
  )
}
