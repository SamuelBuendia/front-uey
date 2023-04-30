import gql from 'graphql-tag'

const LIST_SIMPLE_PRODUCTS = gql`
  query ListSimpleProducts {
    listSimpleProducts {
      id
      image
      price
      productName
      sellerName
      stock
    }
  }
`

const LIST_PROFITABLE_PRODUCTS = gql`
  query ListProfitableProducts {
    listProfitableProducts {
      availability {
        Friday
        Monday
        Saturday
        Sunday
        Thursday
        Tuesday
        Wednesday
      }
      id
      image
      price
      productName
      sellerName
      typeOfRent {
        perHour
        perNight
      }
    }
  }
`

const LIST_SPACES = gql`
  query ListSpaces {
    listSpaces {
      availability {
        Friday
        Saturday
        Monday
        Sunday
        Thursday
        Tuesday
        Wednesday
      }
      id
      googleMapsAddress
      image
      price
      productName
      sellerName
    }
  }
`

const FIND_SIMPLE_PRODUCTS_BY_ID = gql`
  query FindSimpleProduct($findSimpleProductId: Int!) {
    findSimpleProduct(id: $findSimpleProductId) {
      id
      image
      price
      productName
      sellerName
      stock
    }
  }
`

const FIND_PROFITABLE_PRODUCTS_BY_ID = gql`
  query FindProfitableProduct($findProfitableProductId: Int!) {
    findProfitableProduct(id: $findProfitableProductId) {
      availability {
        Friday
        Monday
        Sunday
        Saturday
        Thursday
        Tuesday
        Wednesday
      }
      id
      image
      price
      productName
      sellerName
      typeOfRent {
        perHour
        perNight
      }
    }
  }
`
const FIND_SPACES_BY_ID = gql`
  query FindSpace($findSpaceId: Int!) {
    findSpace(id: $findSpaceId) {
      availability {
        Monday
        Friday
        Saturday
        Sunday
        Thursday
        Tuesday
        Wednesday
      }
      googleMapsAddress
      id
      image
      price
      productName
      sellerName
    }
  }
`

export {
  LIST_SIMPLE_PRODUCTS,
  LIST_PROFITABLE_PRODUCTS,
  LIST_SPACES,
  FIND_SIMPLE_PRODUCTS_BY_ID,
  FIND_PROFITABLE_PRODUCTS_BY_ID,
  FIND_SPACES_BY_ID
}
