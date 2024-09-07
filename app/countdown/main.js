"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
const Countdown = () => {
  const [count, setCount] = useState(3); // Start countdown from 3
  const [remove, setremove] = useState(false);

  const router = useRouter();

  useEffect(() => {
      
     
        if (count === 0) return router.push("/quiz"); // Stop countdown when it reaches 0
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
          }, 1000);
      
          return () => clearInterval(timer); // Cleanup timer on component unmount
    
   
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setremove(true);
    }, 100);
    return () => clearInterval()
  }, []);

  return (
    <div
      style={{ backgroundColor: "#1B363E", height: "100vh" }}
      className="flex justify-center items-center"
    >
      <p className="text-green-400 text-6xl">{remove ? "" : "Ready"}</p>

      {remove ? (
        <h1>
          {count === 0 ? (
            <p className="text-green-400 text-6xl">{ "Go!"}</p>
           
          ) : (
            <div className="text-center">
              <p className="text-white text-6xl">Quiz Start in</p> <p className="text-green-400 text-6xl">{count}</p>
            </div>
          )}
        </h1>
      ) : (
        ""
      )}
      {/* {count > 0 ? <h1>{count}</h1> : <h1>Time's up!</h1>} */}
    </div>
  );
};

export default Countdown;
