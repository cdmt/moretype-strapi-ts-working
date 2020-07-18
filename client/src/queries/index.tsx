import gql from 'graphql-tag';

export const GET_ALL_FONTS = gql `
    query Fonts{
        fonts{
            _id
            name
            description
        }
    }
`