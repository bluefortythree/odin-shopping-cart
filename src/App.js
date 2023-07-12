import Main from './Components/main'
import Shop from './Components/shop'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
