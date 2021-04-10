import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from "graphql";

import {getAchievements, getCourse, getEmployment, getProgram, getPrograms, getStudentGroups} from "./data";

import { courseType } from "./schema/courseType";
import { employmentType } from "./schema/employmentType";
import { programEnum, programType } from "./schema/programType";
import {groupType} from "./schema/groupType";
import {achievementType} from "./schema/achievementType";


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
        },

        achievements: {
            type: GraphQLList(achievementType),
            resolve: (_source) => getAchievements()
        },
        
        groups: {
            type: GraphQLList(groupType),
            resolve: (_source) => getStudentGroups()
        }

    })
})


export const Schema = new GraphQLSchema({
    query: queryType,
    types: [programType, courseType]
});
