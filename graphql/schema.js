import {
    GraphQLList, GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from "graphql";

import {
    getAchievement,
    getAchievements,
    getCourse,
    getEmployment,
    getProgram,
    getPrograms,
    getStudentGroup,
    getStudentGroups
} from "./data";

import { courseType } from "./schema/courseType";
import { employmentType } from "./schema/employmentType";
import { programEnum, programType } from "./schema/programType";
import { groupType } from "./schema/groupType";
import { achievementType } from "./schema/achievementType";


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


        achievement: {
            type: achievementType,
            args: {
                achievementID: {
                    description: "The ID / shorthand of the achievement.",
                    type: GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_source, { achievementID }) => getAchievement(achievementID)
        },

        achievements: {
            type: GraphQLList(achievementType),
            resolve: (_source) => getAchievements()
        },

        group: {
            type: groupType,
            args: {
                groupID: {
                    description: "The ID / shorthand of the group.",
                    type: GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_source, { groupID }) => getStudentGroup(groupID)
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
