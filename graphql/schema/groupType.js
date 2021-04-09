import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

const groupType = new GraphQLObjectType({

    name: "Group",
    description: "Any achievement earned during or related to an educational program.",
    fields: () => ({

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: ""
        },

        role: {
            type: GraphQLNonNull(GraphQLString),
            description: ""
        },

        join_year: {
            type: GraphQLNonNull(GraphQLInt),
            description: ""
        },

        exit_year: {
            type: GraphQLInt,
            description: ""
        },

        details: {
            type: GraphQLList(GraphQLString),
            description: ""
        },

    })
})