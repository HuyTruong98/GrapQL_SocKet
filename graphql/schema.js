// những đối tượng này không liên quan gì đến đối tượng trong CSDL

const { buildSchema } = require("graphql");

const schemaGraphql = buildSchema(`
  type User {
    user_id: ID
    full_name: String
    email: String
    pass_word: String
  }
  
  type Product {
    productId: ID
    productName: String
  }

  type RootQuery {
    getUser: [User]
  }

  type RootMutation {
    createUser(full_name: String, email: String, pass_word: String): String
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = { schemaGraphql };
