import "./App.css";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import WhyUs from "./pages/WhyUs";
import Statistics from "./pages/Statistics";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Signin /> */}

      <h2 className="text-2xl font-bold mb-4 p-10">
        <center>Why Us ?</center>{" "}
      </h2>
      <div className="inline-flex">
        <WhyUs text="Online LIVE Class" image="monitor.png" />
        <WhyUs text="Doubt Solving" image="question.png" />
        <WhyUs text="Personal Teacher" image="teacher.png" />
        <WhyUs text="Test Series" image="search.png" />
      </div>

      <Statistics />

      <Feedback />
    </>
  );
}

export default App;
