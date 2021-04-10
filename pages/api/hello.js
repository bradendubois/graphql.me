import { Schema } from "../../graphql/schema"
import { graphql } from "graphql"


export default (req, res) => {
  graphql(Schema, req.body.query).then(result => {
    res.status(200).json(result)
  })
}
