import { Routes, Route, } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from "./component/Home";
import Instruction from './component/Instruction';
import Biodata from './component/Biodata';
import Programme from './component/Programme';
import Educationemployment from './component/Educationemployment';
import Citizenshipid from './component/Citizenshipid';
import Bankinginfo from './component/Bankinginfo';




const App = () => {
  return ( 
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instruction' element={<Instruction />}/>
        <Route path='/biodata' element={<Biodata/>}/>
        <Route path='/programme' element={<Programme/>}/>
        <Route path='/educationemployment' element={<Educationemployment/>}/>
        <Route path='/citizenshipid' element={<Citizenshipid/>}/>
        <Route path='/bankinginfo' element={<Bankinginfo/>}/>


      </Routes>
    </>
   );
}
 
export default App;










