import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import ScrollToTop from './Components/ScrollToTop';
import Category from './pages/Category';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Product from './pages/Product';
import ProductUpload from './pages/ProductUpload';
import SignUp from './pages/SignUp';
import { LoginStateAtom } from './State/LoginState';

function App() {
  const isLoggedIn = useRecoilValue(LoginStateAtom).state;
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            isLoggedIn?<Home/>:<Intro/>
          } />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:goodsId" element={isLoggedIn?<Product/>:<Intro/>} />
          <Route path="/upload" element={isLoggedIn?<ProductUpload/>:<Intro/>} />
          <Route path="/category" element={isLoggedIn?<Category/>:<Intro/>} />
          <Route path="/mypage" element={isLoggedIn?<MyPage/>:<Intro/>} />
        </Routes>       
      </Router>
  );
}

export default App;
