import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const groupType = new GraphQLObjectType({

    name: "Group",
    description: "Any student group membership was maintained at.",
    fields: () => ({

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "Title of the student group."
        },

        role: {
            type: GraphQLNonNull(GraphQLString),
            description: "Role held within the student group."
        },

        year_start: {
            type: GraphQLNonNull(GraphQLInt),
            description: "Year membership began."
        },

        year_end: {
            type: GraphQLInt,
            description: "Year membership completed."
        },

        details: {
            type: GraphQLList(GraphQLString),
            description: "Any details of involvement or duties within the student group."
        },
    })
})