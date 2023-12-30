import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserItem from './UserItem';

export default function UserList() {
  const [ page, setPage ] = useState(1);
  const [ data, setData ] = useState([]);
  const [ hasMore, setHasMore ] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://us-central1-test-naturalco.cloudfunctions.net/getData", 
        { params: { page } }
      );
      if (resp.data.data.length == 0) setHasMore(false);
      setPage((prev) => prev+1);
      setData((prev) => [ ...prev, ...resp.data.data ]);
    } catch (error) {
      console.log(error.message);
    }
  }; 

  useEffect(() => {
    fetchData();

    return () => {
      setData([]);
    }
  }, [])

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <div className='w-full flex justify-center mt-4'>
            <ReactLoading type="spin" color="#000" height={30} width={30} />
          </div>
        }
      >
        {
          data.map((user, index) => (
            <UserItem key={index} user={user} />
          ))
        }
      </InfiniteScroll>
    </>
  )
}
