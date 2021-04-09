import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const programType = new GraphQLObjectType({

    name: "Program",
    description: "Any post-secondary program.",
    fields: () => ({

        kind: {
            type: GraphQLNonNull(GraphQLString),
            description: "The type of the program."
        },

        field: {
            type: GraphQLNonNull(GraphQLList(GraphQLString)),
            description: "The specific areas of study."
        },

        year_began: {
            type: GraphQLNonNull(GraphQLInt),
            description: "The year that study of this program officially began."
        },

        year_finish: {
            type: GraphQLInt,
            description: "The year that the requirements of this program were completed."
        },

        courses: {
            type: GraphQLList(courseType),
            description: "Any relevant courses taken as part of this program.",
        },

        achievements: {
            type: GraphQLList(achievementType),
            description: "Any relevant achievements earned during or related to this program.",
        },

        groups: {
            type: GraphQLList(groupType),
            description: "Any relevant student groups in which membership was maintained.",
        }
    }),
})