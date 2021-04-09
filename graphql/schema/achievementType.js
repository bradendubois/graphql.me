import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

const achievementType = new GraphQLObjectType({

    name: "Achievement",
    description: "Any achievement earned during or related to an educational program.",
    fields: () => ({

        title: {
            type: GraphQLString,
            description: ""
        },

        year: {
            type: GraphQLInt,
            description: ""
        },

        year_modifier: {
            type: GraphQLString,
            description: ""
        },

        description: {
            type: GraphQLString,
            description: ""
        }
    })
})