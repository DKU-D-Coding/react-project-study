import './GlobalStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductPage from './page/ProductPage';
import WritingPage from './page/WritingPage';
import CategorySelect from './page/CategorySelect';

function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="*" element={<div> Not Found </div>} />
			<Route path="/" element={<Home/>} />
			<Route path="/product-page/:itemId" element={<ProductPage/>} />
			<Route path="/writing" element={<WritingPage/>} />
			<Route path="/select-category" element={<CategorySelect/>} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
