import { gql } from "@apollo/client";

export const GET_CATE = gql`
  query getCategory {
    category
  }
`;

export const GET_BOOKS = gql`
  query getBooks{
    books {
      CID
      author
      tickets {
        TID
        picture
      }
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: ID!){
    user(id: $id) {
      CID
      author
      tickets {
        TID
        picture
      }
    }
  }
`;