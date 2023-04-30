import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <SearchStyled>
      <div className="d-flex searchBox">
        <div>
          <Link to={`/`}>
            <img src="/Logo-Uey.svg" className="logo" alt="Logo Wey SVG" />
          </Link>
        </div>
        <div className="col-10 col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="¿Buscas algo en particular? => Unicamente es Visual"
            />
            <div className="input-group-append">
              <Link to={`/`} className="btn btn-light">
                <i className="bi bi-search"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SearchStyled>
  )
}

const SearchStyled = styled.div`
  .logo {
    height: 2rem;
    width: auto;
    margin-right: 1rem;
  }

  .searchBox {
    background-color: #212121;
  }

  .d-flex {
    display: flex;
    padding: 1rem 1rem;
    justify-content: center;
    align-items: baseline;
  }
`

export default Search
