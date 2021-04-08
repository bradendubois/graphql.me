// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ResumeSchema } from "../../graphql/schema"
import { graphql } from "graphql"

let query = '{ course(courseID: "CMPT-434") { name } program(programName: undergraduate) { kind courses { name } } }'

export default (req, res) => {

  graphql(ResumeSchema, query).then(result => {
    console.log(result)
    res.status(200).json(result)
  })


}

