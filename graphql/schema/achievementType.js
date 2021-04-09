import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const achievementType = new GraphQLObjectType({

    name: "Achievement",
    description: "Any achievement earned during or related to an educational program.",
    fields: () => ({

        title: {
            type: GraphQLString,
            description: "Title of the achievement."
        },

        year: {
            type: GraphQLInt,
            description: "Year the achievement occurred or was obtained."
        },

        year_modifier: {
            type: GraphQLString,
            description: "Section of the year the achievement occurred or was obtained; can be a month (January, ...) or season (Winter, ...)."
        },

        description: {
            type: GraphQLString,
            description: "Relevant details of the achievement."
        }
    })
})
