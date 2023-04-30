import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import ProductList from './views/ProductList'
import ProductDetail from './views/ProductDetail'
import Home from './views/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<ProductList />} />
          <Route
            path="/category/:categoryId/product/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
