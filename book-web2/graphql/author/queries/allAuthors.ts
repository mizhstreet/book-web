import { gql } from "@apollo/react-hooks";
export const allAuthorsQuery = gql`
  query AllAuthors {
    authors {
      id
      name
      image
      slug
    }
  }
`;
