import ContactsPage from "./components/Contacts";
import Register from "./components/Register";
import "./App.css"
import HeaderComp from "./components/header";
import {Routes,Route} from "react-router-dom"
function App(){
  return(
    <>
    <HeaderComp/>
    <Routes>
      <Route exact path="/" element={<h1>Home</h1>}/> 
      <Route exact path="/contact" element={<ContactsPage/>}/> 
      <Route  exact path="/register" element={<Register/>} ></Route>
      <Route path="*" element={<h1 style={{textAlign:"center"}}>Page Not Found (404)</h1>}></Route>
    </Routes>
    </>
  )
}
export default App;
