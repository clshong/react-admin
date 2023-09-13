import {useState, useEffect } from 'react'
import { useCounterStore } from "~/stores";
import { getData } from '~/api/modules/testApi.js'

const Home = () => {

  const onFinish = async()=>{
    try {
      const res =  await getData()
      console.log(res);
      // Setimgdata(res)
    } catch(err){
      console.log(err);
    }
  }

  // Zustand获取值
  const counter = useCounterStore(state => state.counter);
  const increase = useCounterStore(state => state.increase);


  return (
    <>
      <p>Home Page</p>
      <button onClick={() => increase(1)} type="primary">
        counter: {counter}
      </button>
      <br />
      <button onClick={()=>onFinish()}>
        点击
      </button>
    </>
  );
};

export default Home;
