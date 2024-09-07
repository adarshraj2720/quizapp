
import {UserAddOutlined } from "@ant-design/icons"
const Quizplay = () =>{
    return(
        <>
        
        <nav
        style={{ backgroundColor: "#100424" }}
        id="navbar"
        className="navbar flex items-center justify-between pt-4 pb-4 pr-8 pl-8"
      >
        <h1 className="font-bold text-4xl" style={{ color: "#FFFF00" }}>
          Quizard
        </h1>
        <ul className="flex text-xl flex-wrap">
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Live Quiz
          </li>
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Default
          </li>
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Login
          </li>
          <li style={{ color: "#FFFF00" }} className="mr-6">
            Register
          </li>
        </ul>
      </nav>
      <main>
        <section style={{backgroundColor:"#100422"}} className="h-screen text-center">

            <img className="m-auto" width={"200px"} src="https://quizard.app/images/quiz.png"/>
            <p className="text-white text-4xl font-thin my-4">Computer Basic Quiz 1</p>
            <p className="text-white  font-normal my-4">Answer these simple questions correctly and earn coins</p>
            <p className="text-white my-4">Difficulty Level :<span style={{backgroundColor:"#D0F2E4",color:"#00A986"}} className="p-2 rounded-md ml-2" >Easy</span></p>
            <p className="text-white text-center my-4"><span style={{backgroundColor:"#FACC15",borderRadius:"50%", }} className="p-2 text-black text-center mr-2">? </span>10 Questions</p>
            <div>

            <button style={{backgroundColor:"#0891B2",}} className="text-white my-4 px-28 py-4 rounded-3xl">Play</button>
            </div>
            <button style={{backgroundColor:"#D15173",}} className="text-white my-4 px-16 py-4 rounded-3xl">Play with Friends <UserAddOutlined/></button>


        </section>
      </main>
        </>
    )
}

export default Quizplay