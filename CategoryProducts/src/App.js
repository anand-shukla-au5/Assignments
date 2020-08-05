import React, { useState, useEffect } from 'react';
import { Jumbotron, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap'
import './App.css';
import axios from 'axios'
import Result from './components/result'
import Category from "./components/category"
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

function App() {
  const [query, setSearch] = useState("")
  const [pagination_token, setPage] = useState(1)
  const [categoryId, setCatid] = useState(0)
  const [products, setProduct] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    const defaultQuerry = async () => {
      let res = await axios.get(`https://api.homedrop.in/products?limit=20&pagination_key=${pagination_token}`)
      setProduct(res.data.body)
    }
    defaultQuerry()
  }, [pagination_token])

  useEffect(() => {
    const categoryFetch = async () => {
      let res = await axios.get(`https://api.homedrop.in/products?&category=${categoryId}`)
      setProduct(res.data.body)
    }
    categoryFetch()
  }, [categoryId])

  useEffect(() => {
    const defaultCategory = async () => {
      let res = await axios.get(`https://api.homedrop.in/categories?`)
      setCategory(res.data.data)
    }
    defaultCategory()
  }, [])

  useEffect(() => {
    const typeQuerry = async () => {
      let res = await axios.get(`https://api.homedrop.in/products?search=${query}`)
      setProduct(res.data.body)
    }
    typeQuerry()
  }, [query])

  const changePage = (no) => {
    console.log("Chane Page", no)
    if (no === 1) {
      setPage(1)
    }
    else if (no === 2) {
      setPage(2)
    }
    else if (no === 3) {
      setPage(3)
    }
  }

  const fetchcatPro = (id) => {
    console.log("Category id", id)
    setCatid(id)
  }

  // const serchQuery = (e) => {
  //   const clicks = fromEvent(document.getElementById('search'), 'input');
  //   const result = clicks.pipe(debounceTime(2000));
  //   result.subscribe(x => setSearch(x));
  // }
  console.log(products)
  console.log("Category", category)
  return (
    <div className="App">
      <Container fluid>
        <Jumbotron>
          <h1>Search Product</h1>
          <Row>
            <Col>
              <InputGroup className="mt-2" size="lg">
                <FormControl id="search" placeholder="Search Item" value={query} onChange={(e) => setSearch(e.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
            </Col>
            <Col></Col>
          </Row>
        </Jumbotron>
        <Category catList={category} catPro={(id) => fetchcatPro(id)} />
        <Result proList={products} pages={(no) => changePage(no)} />
      </Container>
    </div>
  );
}

export default App;
