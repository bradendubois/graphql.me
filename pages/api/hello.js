// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ResumeSchema } from "../../graphql/schema"
import { graphql } from "graphql"

let query = '{ program { kind } }'

export default (req, res) => {

  graphql(ResumeSchema, query).then(result => console.log(result))

  res.status(200).json({ name: 'John Doe' })

}

