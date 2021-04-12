import { Schema } from "../../graphql/schema"
import { graphql } from "graphql"


export default (req, res) => {

    console.log(req.body)

    graphql(Schema, req.body.query)
        .then(result => { res.status(200).json(result) })
        .catch(err => { res.status(400).json(err) })
}
