import './App.css';
import AddCourse from "./pages/Add/AddCourse";
import CourseList from "./pages/CourseList/CourseList";
import {useState} from "react";

function App() {
  const [nav, setNav] = useState('/');
  const [dataIn, setDataIn] = useState(null);
  console.log(dataIn);
  let Component;

  switch (nav) {
    case '/':
      Component = CourseList;
      break;
    case '/add-course':
      Component = AddCourse;
      break;
    default:
      Component = CourseList;
      break;
  }

  return (
      <div className='App'>
        <Component onNavigate={setNav} onGetData={setDataIn} dataIn={dataIn}/>
      </div>
  );
}

export default App;
