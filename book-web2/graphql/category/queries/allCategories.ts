import { gql } from "@apollo/react-hooks";
export const allCategoriesQuery = gql`
  query allCategories {
    categories(orderBy: { field: "name", direction: ASC }, where: { name: "" }) {
      id
      name
      image
      description
    }
  }
`;
