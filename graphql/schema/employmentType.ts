import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import { durationType } from "./timeType";

export const employmentType = new GraphQLObjectType({

    name: "Employment",
    description: "Any means of employment.",
    fields: () => ({

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "Title of the position held."
        },

        institution: {
            type: GraphQLString,
            description: "Institution or business at which research was carried out or employment was held."
        },

        location: {
            type: GraphQLString,
            description: "Location of the institution or business."
        },

        description: {
            type: GraphQLNonNull(GraphQLList(GraphQLString)),
            description: "Descriptions of research or employment, including any relevant duties.",
            resolve: (employment) => Object.values(employment.description)
        },

        duration: {
            type: GraphQLNonNull(durationType),
            description: "Duration the position has been/was held."
        }
    })
})
