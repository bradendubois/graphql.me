import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";


export const socialType = new GraphQLObjectType({

    name: "Social",
    description: "A profile, username, or some similar social identifer.",
    fields: () => ({

        network: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the platform the account relates to.",
        },

        account: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The username or similar identifier."
        },

        link: {
            type: new GraphQLNonNull(GraphQLString),
            description: "A full link, just as an HTTPS link, mailto: link or similar.",
        }
    })
})
