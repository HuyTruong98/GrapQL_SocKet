const express = require("express");
const app = express();
app.use(express.json());

const { graphqlHTTP } = require("express-graphql");
const { schemaGraphql } = require("./graphql/schema");
const { resolverGraphql } = require("./graphql/resolver");

app.use(
  "/demo",
  graphqlHTTP({
    schema: schemaGraphql, // nơi định nghĩa các đối tượng và khởi tạo tên hàm xử lý
    rootValue: resolverGraphql, // nơi xử lý chức năng của các hàm được khởi tạo bên schema
    graphiql: true,
  })
);

app.listen(8080);
