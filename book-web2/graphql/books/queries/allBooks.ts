import { gql } from "@apollo/react-hooks";
export const allBooksQuery = gql`
  query AllBooks {
    books {
      id
      name
      price
      author {
        name
      }
      sale
      image
    }
  }
`;
