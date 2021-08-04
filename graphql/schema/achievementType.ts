import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

import { programType } from "./programType"
import { getProgramsWithAchievement } from "../resolvers"
import { timeType } from "./timeType";



export const achievementType = new GraphQLObjectType({

    name: "Achievement",
    description: "Any achievement earned during or related to an educational program.",
    fields: () => ({

        title: {
            type: GraphQLString,
            description: "Title of the achievement."
        },

        when: {
            type: GraphQLNonNull(timeType),
            description: "When the achievement or award was granted or otherwise issued."
        },

        description: {
            type: GraphQLString,
            description: "Relevant details of the achievement."
        },

        program: {
            type: programType,
            description: "The program the achievement was most relevant to.",
            resolve: (achievement) => getProgramsWithAchievement(achievement)
        }
    })
})
