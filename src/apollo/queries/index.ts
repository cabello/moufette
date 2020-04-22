import { gql } from 'apollo-boost';

export const FEEDBACKS = gql`
  query {
    feedbacks {
      _id
      text
    }
  }
`;

export const USER = gql`
  query {
    currentUser {
      _id
      email
      team {
        _id
        name
        token
      }
    }
  }
`;
