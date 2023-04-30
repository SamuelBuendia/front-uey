import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import SimpleMap from '../components/Maps'
import { fetchGraphQL } from '../services/graphql'
import { CATEGORIES } from '../utils/schemas/categories'

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [, setCategory] = useState({})
  const { categoryId, productId } = useParams()

  useEffect(() => {
    const actualCategory = CATEGORIES.find(
      (category) => category.id === parseInt(categoryId)
    )
    setCategory(actualCategory)

    const fetchData = async () => {
      try {
        const { data } = await fetchGraphQL(actualCategory.findProduct.query, {
          [actualCategory.findProduct.variable]: parseInt(productId)
        })
        const product = data[actualCategory.findProduct.variable.split('Id')[0]]
        setProduct(product)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [categoryId, productId])

  return (
    <ProductListStyled>
      <div className="container shadow w-md-50 my-5">
        {product?.id ? (
          <>
            <div className="row pt-5 mx-4">
              <div className="col-md-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mb-3 mb-md-0">
                <img src={product?.image} alt="Product" />
              </div>
              <div className="d-flex flex-column justify-content-evenly col-md-4 text-left mr-auto">
                {/* <div className="cont-logo">
                  <img src={'/Logo-Uey.svg'} className="logo" alt="Uey Logo" />
                </div> */}
                {product?.stock && `${product.stock ?? 0} - Disponibles`}
                <h4 className="my-2">{product?.productName}</h4>
                <p className="my-2">
                  <strong>Marca:</strong> {product?.sellerName}
                </p>
                {product?.typeOfRent && (
                  <select name="select" className="my">
                    <option value="" disabled selected>
                      Tipos de renta
                    </option>
                    <option
                      value="perNight"
                      disabled={!product?.typeOfRent?.perNight}
                    >
                      Por Noche
                    </option>
                    <option
                      value="perHour"
                      disabled={!product?.typeOfRent?.perNight}
                    >
                      Por Hora
                    </option>
                  </select>
                )}
                {product?.availability && (
                  <span className="my-3">
                    <strong>Disponibilidad:</strong> <br />
                    {product?.availability.Monday && <span>Lunes{', '}</span>}
                    {product?.availability.Tuesday && <span>Martes{', '}</span>}
                    {product?.availability.Wednesday && (
                      <span>Miercoles{', '}</span>
                    )}
                    {product?.availability.Thursday && (
                      <span>Jueves{', '}</span>
                    )}
                    {product?.availability.Friday && <span>Viernes{', '}</span>}
                    {product?.availability.Saturday && (
                      <span>Sabado{', '}</span>
                    )}
                    {product?.availability.Sunday && <span>Domingo{', '}</span>}
                  </span>
                )}
                <p className="price-product-detail mb-3">
                  <strong>Precio</strong> ${product.price}
                </p>{' '}
                <button type="button" className="btn btn-primary w-100">
                  Comprar
                </button>
              </div>
            </div>
            <div className="row py-5 mx-3">
              <div className="col-md-10 text-left">
                <h2>Descripción del producto</h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            {product?.googleMapsAddress && (
              <div className="row mx-3 pb-5">
                <div className="col-md-12">
                  <SimpleMap />
                </div>
              </div>
            )}
          </>
        ) : (
          <h3 className="p-5 text-center">{`El producto ${productId} no existe`}</h3>
        )}
      </div>
    </ProductListStyled>
  )
}

const ProductListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .cont-logo {
    display: flex;
    justify-content: end;
    margin-bottom: 2rem;
    .logo {
      width: 5rem;
    }
  }
`

export default ProductDetail
