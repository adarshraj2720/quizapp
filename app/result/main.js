"use client"
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




const Result = () => {

    const router = useRouter();
  return (
    <>
      <section style={{ backgroundColor: "#1B363E", height: "100vh" }}>
        <nav className="px-8 py-4 flex justify-between items-center">
          <h2 className="text-4xl" style={{ color: "#FACC19" }}>
           Quizard
          </h2>
          <div className="flex bg-purple-500 px-4 py-2 rounded-3xl">
            <img
              height={"20px"}
              width={"20px"}
              src="https://quizard.app//images/coin.png"
            />
            <span style={{ color: "#FACC19", marginLeft: "10px" }}>0</span>
          </div>
        </nav>
        <h2 className="text-3xl py-4 flex items-center" style={{color:"#FACC15",margin: "0 auto",width:"60%"}}><FaArrowLeft onClick={()=>router.push("/")} className="me-2 cursor-pointer"/>Computer Basic Quiz-1</h2>
        <section
          className="rounded-lg px-4 py-2   "
          style={{
            backgroundColor: "#193037",
            color: "white",
            width: "60%",
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
              <p className="text-2xl">12</p>
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
              <p className="text-2xl">12</p>
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
              <p className="text-2xl">3</p>
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
              <p className="text-2xl">12</p>
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
              <p className="text-2xl">30%</p>
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
              <p className="text-2xl">10 Sec</p>
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
              <p className="text-2xl">0</p>
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
              <p className="text-2xl">1 sec</p>
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
      </section>
    </>
  );
};

export default Result;
