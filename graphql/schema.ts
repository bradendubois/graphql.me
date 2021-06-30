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
    getPrograms, getProject, getProjects, getSkills, getSocials,
    getStudentGroup,
    getStudentGroups
} from "./resolvers";

import { achievementType } from "./schema/achievementType";
import { courseType } from "./schema/courseType";
import { employmentType } from "./schema/employmentType";
import { programEnum, programType } from "./schema/programType";
import { groupType } from "./schema/groupType";
import { socialType } from "./schema/socialType";
import {projectType} from "./schema/projectType";
import {skillType} from "./schema/skillType";

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
                    type: GraphQLString
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
        },

        socials: {
            type: GraphQLList(socialType),
            resolve: (_source) => getSocials()
        },

        projects: {
            type: GraphQLList(projectType),
            resolve: (_source) => getProjects()
        },

        project: {
            type: projectType,
            args: {
                projectID: {
                    description: "The ID / shorthand of the project.",
                    type: GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_source, { projectID }) => getProject(projectID)
        },

        skills: {
            type: GraphQLList(skillType),
            resolve: (_source) => getSkills()
        }
    })
})


export const Schema = new GraphQLSchema({
    query: queryType,
    types: [programType, courseType]
});
