import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import { durationType } from "./timeType";

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

        duration: {
            type: GraphQLNonNull(durationType),
            description: "Duration of membership of the group."
        },

        details: {
            type: GraphQLList(GraphQLString),
            description: "Any details of involvement or duties within the student group.",
            resolve: (group) => Object.values(group.details)
        },
    })
})