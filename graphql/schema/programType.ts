import {
    GraphQLEnumType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

import { achievementType } from "./achievementType";
import { courseType } from "./courseType";
import { groupType } from "./groupType";

import { getAchievementsForProgram, getCoursesForProgram, getGroupsForProgram } from "../resolvers";
import { durationType } from "./timeType";

export const programEnum = new GraphQLEnumType({

    name: "ProgramEnum",
    description: "Any post-secondary program.",
    values: {
        "undergraduate": {
            value: "undergraduate",
            description: "B.Sc. (Double Honours) in Computer Science & Philosophy"
        },

        "certificate": {
            value: "certificate",
            description: "Certificate in Ethics, Justice, and Law"
        }
    }

});


export const programType = new GraphQLObjectType({

    name: "Program",
    description: "Any post-secondary program.",
    fields: () => ({

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "The type of the program."
        },

        field: {
            type: GraphQLNonNull(GraphQLString),
            description: "The specific areas of study."
        },

        institution: {
            type: GraphQLNonNull(GraphQLString),
            description: "The university or similar institution studied at."
        },

        location: {
            type: GraphQLNonNull(GraphQLString),
            description: "Location of the university or institution studied at."
        },

        duration: {
            type: GraphQLNonNull(durationType),
            description: "Duration the program is/was studied."
        },

        courses: {
            type: GraphQLList(courseType),
            description: "Any relevant courses taken as part of this program.",
            resolve: (program) => getCoursesForProgram(program)
        },

        achievements: {
            type: GraphQLList(achievementType),
            description: "Any relevant achievements earned during or related to this program.",
            resolve: (program) => getAchievementsForProgram(program)
        },

        groups: {
            type: GraphQLList(groupType),
            description: "Any relevant student groups in which membership was maintained.",
            resolve: (program) => getGroupsForProgram(program)
        }
    }),
})
