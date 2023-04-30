import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { fetchGraphQL } from '../services/graphql'
import styled from 'styled-components'
import { CATEGORIES } from '../utils/schemas/categories'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [category, setCategory] = useState({})
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const actualCategory = CATEGORIES.find(
      (category) => category.id === parseInt(categoryId)
    )
    setCategory(actualCategory)

    const fetchData = async () => {
      try {
        const { data } = await fetchGraphQL(actualCategory.listProducts, {})
        const products = data[actualCategory.graphqlKey]
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [categoryId])

  return (
    <ProductListStyled className="container">
      <h1>{category.name}</h1>
      <div className="row my-5 d-flex">
        {products.map((product) => {
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}/product/${product.id}`}
              className="col-md-4 px-md-3 py-1"
            >
              <div className="card">
                <h5 className="my-3">{product.productName}</h5>
                <div className="">
                  <img
                    src={product.image}
                    className="img-fluid mb-3"
                    alt="logo"
                  />
                </div>
                <div className="d-flex justify-content-around align-items-center mb-3">
                  ${product.price}
                  <button type="button" className="btn btn-light">
                    Ver Más
                  </button>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </ProductListStyled>
  )
}

const ProductListStyled = styled.div`
  text-align: center;
  h1 {
    margin-top: 3rem;
  }

  .title {
    margin-bottom: 3rem;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
  .container {
    padding: 4rem;
    text-align: center;
    .d-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        height: 30rem;
      }
    }
  }
`

export default ProductList
