"use client";

import { useRouter } from "next/navigation";
export default  function Home() {
  const router = useRouter();
  const Computerdata = [
    {
      name: "Computer Basic Quiz 1",
      question: "10",
      number: 69,
      img: "https://quizard.app/images/ScienceQuiz.png",
    },
    {
      name: "Computer Basic Quiz 1",

      question: "10",

      number: 34,
      img: "https://quizard.app/images/ScienceQuiz.png",
    },
    {
      name: "Computer Basic Quiz 1",

      question: "10",

      number: 92,
      img: "https://quizard.app/images/ScienceQuiz.png",
    },
    {
      name: "Computer Basic Quiz 1",

      question: "10",

      number: 26,
      img: "https://quizard.app/images/ScienceQuiz.png",
    },
    {
      name: "Computer Basic Quiz 1",

      question: "10",

      number: 50,
      img: "https://quizard.app/images/ScienceQuiz.png",
    },
  ];

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
  
    if (window.scrollY > 50) { // Adjust this value as needed
      navbar?.classList?.add('scrolled');
    } else {
      navbar?.classList?.remove('scrolled');
    }
  });

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <nav
        // style={{ backgroundColor: "#06B6D4" }}
        id="navbar"
        className="navbar flex items-center justify-between pt-4 pb-4 pr-8 pl-8"
      >
        <h1 className="font-bold text-4xl" style={{ color: "#FFFF00" }}>
          Quizard
        </h1>
        <div className="flex items-start">
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
          <div
            style={{ backgroundColor: "#0084AF" }}
            className="flex  px-4 py-2 rounded-3xl"
          >
            <img
              height={"20px"}
              width={"20px"}
              src="https://quizard.app//images/coin.png"
            />
            <span style={{ color: "#FACC19", marginLeft: "10px" }}>0</span>
          </div>
        </div>
      </nav>
      <main>
        <section 
          style={{ backgroundColor: "#06B6D4",  }}
          className="lg:h-svh sm:h-full grid lg:grid-cols-2 sm:grid-cols-1 p-4 content"
        >
          <div className="lg:w-1/2 sm:w-full m-auto flex justify-center">
            <img  src={"https://quizard.app/images/kid.png"} />
          </div>
          <div className="lg:w-1/2 sm:w-full m-auto flex flex-col items-center">
            <h3 className="text-white text-6xl ">Play Quiz</h3>
            <p className="text-white   mt-3 text-xl     lg:w-96">
              Welcome to Quizard, where knowledge meets fun! Unleash your
              intellect with our captivating quizzes spanning various topics.
              Challenge yourself, compete with friends, and embark on a journey
              of discovery. Engage in brain-teasing trivia that entertains and
              educates. Quizard - Where every question unlocks a world of
              possibilities!
            </p>
            <button style={{
              color:"black",
              backgroundColor:"#FFFF00",
              padding:"10px 16px",
              borderRadius:"10px",
              marginTop:"6px"
            }}>
              Start Quiz
            </button>
          </div>
        </section>
        <section
          style={{ backgroundColor: "#06B6D4" }}
          className="pt-6 pb-6 m-10  rounded-lg flex justify-center"
        >
          <div
            style={{ border: "2px solid #FACC15", width: "" }}
            className="rounded-2xl px-2 py-4 flex justify-center flex-wrap"
          >
            <input
              placeholder="Enter Game Code"
              className="rounded-lg  pl-4   mr-4 "
            ></input>
            <button
              style={{ backgroundColor: "#2C2C2C", color: "#C2BCAD" }}
              className="px-9 py-3 rounded-lg "
            >
              Join Game
            </button>
          </div>
        </section>

        <section className="mx-10 my-10">
          <div className="flex justify-between my-4">
            <h2 className="text-3xl">Computer</h2>
            <button
              className=" py-1 px-4 rounded-lg"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                backgroundColor: "#CCE6EF",
                color: "#0086B1",
              }}
            >
              View More
            </button>
          </div>
          <div>
            <div class="grid lg:grid-cols-5 gap-5 md:grid-cols-1 mx-4">
              {Computerdata.map((item, i) => (
                <div
                  key={i}
                  onClick={() => router.push("/countdown")}
                  style={{ outline: "1px solid grey" }}
                  className="cursor-pointer relative bg-[#fff] dark:bg-slate600 rounded-lg dark:border-0 border  border-gray-300 "
                >
                  <img
                    className="scaleanimation"
                    style={{
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                    src={item.img}
                  />

                  <span
                    style={{ bottom: "30%", left: "4%" }}
                    className="text-white bg-black p-1 rounded-lg absolute"
                  >
                    {item.question + " Qs"}
                  </span>

                  <span
                    style={{ bottom: "30%", right: "4%" }}
                    className="text-white bg-black p-1 rounded-lg absolute"
                  >
                    {item.number + " Plays"}
                  </span>

                  <p className="p-4 font-thin">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer
        className="text-sm text-white px-8 py-4 flex justify-between  flex-wrap"
        style={{ backgroundColor: "#06B6D4" }}
      >
        <span className="footerlink">Quizard &#169; Copyright 2024, All right reserved.</span>
        <ul className=" cursor-pointer footernav">
          <li className="me-2 footerlink">About Us</li>
          <li className="me-2 footerlink">Contact Us</li>
          <li className="me-2 footerlink">Privacy & Cookies Policy</li>
          <li className="me-2 footerlink">Terms and Conditions</li>
          <li>Disclamier</li>
        </ul>
      </footer>
    </div>
  );
}
