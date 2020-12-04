import { gql } from "@apollo/react-hooks";

export const countriesQuery = gql`
  query Countries {
    countries {
      code
      name
      native
    }
  }
`;
