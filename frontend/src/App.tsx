
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './components/landing';
import { Room } from './components/Room';

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/Room" element={< Room />}/> 
           <Route path='/' element={<Landing/>}/> 
           </Routes>
    </BrowserRouter>
  )
}
export default App
