import { gql } from "@apollo/react-hooks";
export const authorQuery = gql`
  query Author($slug: String) {
    author(slug: $slug) {
      id
      name
      description
      image
      books {
        id
        name
        price
        sale
        image
      }
    }
  }
`;
