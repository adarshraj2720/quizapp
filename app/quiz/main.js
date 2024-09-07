"use client";

import { useEffect, useState } from "react";

import styles from "../styles/Quiz.module.css";
import { FaMedal } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { VscPercentage } from "react-icons/vsc";
import { CiClock2 } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [seconds, setSeconds] = useState(60); // Initialize with 60 seconds
  const [isActive, setIsActive] = useState(true); // Timer is active by default

  const [time,setTime] = useState([])
  const [unattempt,setUnattempt] = useState(0)

  const handleAnswerOptionClick = (selectedOption) => {
    setAnswered(true);
    setSelectedOption(selectedOption);
    setTime(prev => [...prev, seconds])
 console.log(time)
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 4);
     
    }
  };



  useEffect(() => {
    let timerId;

    if (isActive && seconds > 0) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    // Cleanup the interval on component unmount or when stopping
    return () => clearInterval(timerId);
  }, [isActive, seconds]);

  const stopCountdown = () => {
    setIsActive(false); // Stop the timer
  };


 
  const quizData = [
    {
      number: "1",
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      number: "2",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "3",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "4",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "5",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "6",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "7",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "8",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "9",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },
    {
      number: "10",
      question: "What is the capital of Germany?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Berlin",
    },

    // Add more questions here
  ];

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedOption(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(()=>{
    if(seconds===0){
      setUnattempt(unattempt+1)
      handleNextQuestion()
      setSeconds(60);
      setIsActive(true);
    }
  },[seconds])

  const router = useRouter();

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <section  style={{ backgroundColor: "#1B363E", height: "100%", paddingBottom:"50px" }}>
      {
        showScore?
        <nav className="px-8 py-4 flex justify-between items-center">
        <h2 className="text-4xl" style={{ color: "#FACC19" }}>
         Quizard
        </h2>
        <div className="flex">

        <ul className="flex text-xl flex-wrap navbarlisting">
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Live Quiz
          </li>
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Profile
          </li>
          <li style={{ color: "#FFFF00" }} className="mr-6">
            DEFAULT
          </li>
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Logut
          </li>
          
        </ul>
        <div className="flex bg-purple-500 px-4 py-2 rounded-3xl">
          
          <img
            height={"20px"}
            width={"20px"}
            src="https://quizard.app//images/coin.png"
          />
          <span style={{ color: "#FACC19", marginLeft: "10px" }}>{score}</span>
        </div>
        </div>
      </nav>
      :
      <nav className="px-8 py-4 flex justify-between items-center">
        <h2 className="text-4xl" style={{ color: "#FACC19" }}>
          Computer Basic Question
        </h2>
        <div className="flex bg-purple-500 px-4 py-2 rounded-3xl">
          <img
            height={"20px"}
            width={"20px"}
            src="https://quizard.app//images/coin.png"
          />
          <span style={{ color: "#FACC19", marginLeft: "10px" }}>
            {score}
          </span>
        </div>
      </nav>
      }
      <section >
        {showScore ? (
         <section style={{ backgroundColor: "#1B363E", height: "100%" }}>
        
         <h2 className="text-3xl py-4 flex items-center" style={{color:"#FACC15",margin: "0 auto",width:"60%"}}><FaArrowLeft onClick={()=>router.push("/")} className="me-2 cursor-pointer"/>Computer Basic Quiz-1</h2>
         <section
           className="rounded-lg px-4 py-2  lg:w-3/5 sm:w-4/5 lg:h-screen sm:h-svh "
           style={{
             backgroundColor: "#193037",
             color: "white",
           
             margin: "0 auto",
             //   textAlign: "center",
           }}
         >
             <div className="grid grid-cols-2 gap-4">
 
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
             <BsCoin className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Coin Earned
               </p>{" "}
               <p className="text-2xl">{score}</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
           <GiTargetPrize className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Your Score
               </p>{" "}
               <p className="text-2xl">{score}</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
             <FiArrowUpRight className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Correct
               </p>{" "}
               <p className="text-2xl">{score/4}</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
            <RxCross2 className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
           Incorrect
               </p>{" "}
               <p className="text-2xl">{10-score}</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
            <VscPercentage className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Percentage
               </p>{" "}
               <p className="text-2xl">{(score/10)*100}</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
            <CiClock2 className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Time spent
               </p>{" "}
               <p className="text-2xl">{600-time.reduce((a,b)=>a+b,0)}sec</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
            <FaGripLines className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Unattempted
               </p>{" "}
               <p className="text-2xl">{unattempt}</p>
             </div>
           </div>
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
             <IoIosClock className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Time/Ques
               </p>{" "}
               <p className="text-2xl">{Math.round((600-time.reduce((a,b)=>a+b,0))/10)} sec</p>
             </div>
           </div>
             </div>
           <div  className="grid grid-cols-1">
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg p-2 flex items-center"
           >
             <FaMedal className="me-2"/>
             <div>
               <p style={{ fontSize: "14px" }} className="tracking-wide">
                 Live Rank
               </p>{" "}
               <p className="text-2xl">48</p>
             </div>
           </div>
 
           </div>
         </section>
         <section
           className="rounded-lg px-4 py-2 "
           style={{
             backgroundColor: "#193037",
             color: "white",
             width: "60%",
             margin: "20px auto",
             //   textAlign: "center",
           }}
         >
             <div className="grid grid-cols-2 gap-4">
 
 <div
   style={{ backgroundColor: "#0083AC" }}
   className=" rounded-lg  flex items-center py-4 px-2"
 >
   
     <p style={{ fontSize: "14px" }} className="tracking-wide">
       Share Score
     </p>{" "}
    
 </div>
 <div
   style={{ backgroundColor: "#0083AC" }}
   className=" rounded-lg  flex items-center py-4 px-2"
 >
   
     <p style={{ fontSize: "14px" }} className="tracking-wide">
       Review Question
     </p>{" "}
    
 </div>

 </div>
 <div  className="grid grid-cols-1">
           <div
             style={{ backgroundColor: "#2E4950" }}
             className="my-2 rounded-lg py-4 px-2 "
           >
          
           
               <p style={{ fontSize: "14px" }} className="tracking-wide text-center">
                 Leaderboard
               </p>{" "}
             </div>
 
           </div>
          </section>
       </section>
        ) : (
          <div className="rounded-lg px-10 pb-16 lg:w-3/5 sm:w-4/5 lg:h-screen sm:h-svh"
            style={{
              backgroundColor: "#193037",
              
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p className="text-white text-lg tracking-wider font-thin py-4">Time Remainig:</p>
            <p className="text-white text-lg tracking-wider font-thin py-4">{seconds}</p>
            <h3 className="text-white text-lg tracking-wider font-thin py-4">
              {quizData[currentQuestion].number} of 10
            </h3>
            <h2 className="text-white text-lg tracking-wider font-thin pt-y text-left ">{quizData[currentQuestion].question}</h2>
            <div className={styles.options}>
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  style={{margin:"12px 0"}}
                  key={option}
                  onClick={() => {
                    handleAnswerOptionClick(option);
                    stopCountdown();
                  }}
                  disabled={answered}
                  className={`${styles.optionButton} ${
                    answered && option === quizData[currentQuestion].answer
                      ? styles.correct
                      : answered && option === selectedOption
                      ? styles.wrong
                      : ""
                  }`}
                >
                 <span className="p-2 me-2" style={{backgroundColor:"#193037",color:"white",height:"50px",width:"50px",borderRadius:"50%"}} >
                  
                   {optionLabels[index]} 

                  </span>
                   {option}
                </button>
              ))}
            </div>
            {answered && (
              <button
                onClick={() => {
                  handleNextQuestion();
                  setSeconds(60);
                  setIsActive(true);
                }}
                className={styles.nextButton}
              >
              {quizData[currentQuestion].number==10 ? <p>Submit</p> :  "Next Question"}
              </button>
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default Quiz;
