import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CATEGORIES } from '../utils/schemas/categories'

const Home = () => {
  return (
    <HomeStyled>
      <div className="container">
        <h1 className="title">Selecciona una Categoría</h1>
        <div className="row d-flex">
          {CATEGORIES.map((category) => {
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="col-md-4 px-md-3 py-1"
              >
                <div className="card">
                  <h5>{category.name}</h5>
                  <div className="">
                    <img
                      src={category.image}
                      className="img-fluid my-3"
                      alt="logo"
                    />
                  </div>
                  <p>{category.desciption}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
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

export default Home
