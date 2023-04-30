import {
  LIST_SIMPLE_PRODUCTS,
  LIST_PROFITABLE_PRODUCTS,
  LIST_SPACES,
  FIND_SIMPLE_PRODUCTS_BY_ID,
  FIND_PROFITABLE_PRODUCTS_BY_ID,
  FIND_SPACES_BY_ID
} from './graphql'

const CATEGORIES = [
  {
    id: 1,
    name: 'Productos Simples',
    desciption:
      'Son productos que se puedes comprar y se enviarán a la dirección que especifiques.',
    image: 'https://via.placeholder.com/250',
    listProducts: LIST_SIMPLE_PRODUCTS,
    graphqlKey: 'listSimpleProducts',
    findProduct: {
      variable: 'findSimpleProductId',
      query: FIND_SIMPLE_PRODUCTS_BY_ID
    }
  },
  {
    id: 2,
    name: 'Productos Rentables',
    desciption:
      'Estos son productos que se rentan para una fecha. Por ejemplo unas mesas.',
    image: 'https://via.placeholder.com/250',
    listProducts: LIST_PROFITABLE_PRODUCTS,
    graphqlKey: 'listProfitableProducts',
    findProduct: {
      variable: 'findProfitableProductId',
      query: FIND_PROFITABLE_PRODUCTS_BY_ID
    }
  },
  {
    id: 3,
    name: 'Espacios',
    desciption:
      'Estos son lugares que se rentan para hacer eventos. Por ejemplo, un salón de fiestas.',
    image: 'https://via.placeholder.com/250',
    listProducts: LIST_SPACES,
    graphqlKey: 'listSpaces',
    findProduct: {
      variable: 'findSpaceId',
      query: FIND_SPACES_BY_ID
    }
  }
]

export { CATEGORIES }
