import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from "graphql";

import { getCourse, getEmployment, getProgram, getPrograms} from "./data";

import { programEnum, programType } from "./schema/programType";
import { employmentType } from "./schema/employmentType";
import { courseType } from "./schema/courseType";


const queryType = new GraphQLObjectType({
    name: "Query",
    fields: () => ({

        programs: {
          type: GraphQLList(programType),
          resolve: (_source) => getPrograms()
        },

        program: {
            type: programType,
            args: {
                programName: {
                    description: "Returns details on the given program.",
                    type: programEnum
                }
            },
            resolve: (_source, { programName }) => getProgram(programName)
        },

        course: {
            type: courseType,
            args: {
                courseID: {
                    description: "The subject and course number of the course as 'SUBJ-1234'.",
                    type: GraphQLString
                }
            },
            resolve: (_source, { courseID }) => getCourse(courseID)
        },

        employment: {
            type: GraphQLList(employmentType),
            resolve: (_source) => getEmployment()
        }

    })
})


export const ResumeSchema = new GraphQLSchema({
    query: queryType,
    types: [programType, courseType]
});
