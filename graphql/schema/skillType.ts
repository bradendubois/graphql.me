import {
    GraphQLEnumType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";


export const experienceEnum = new GraphQLEnumType({

    name: "ExperienceEnum",
    description: "A level of experience in some skill.",
    values: {

        "high": {
            value: "high",
            description: "high experience - advanced knowledge"
        },

        "medium": {
            value: "medium",
            description: "medium experience - proficient knowledge"
        },

        "low": {
            value: "low",
            description: "low experience - familiar / incidental knowledge"
        }
    }
});


export const skillType = new GraphQLObjectType({

    name: "Skill",
    description: "A skill involving some framework or language.",
    fields: () => ({

        name: {
            type: GraphQLNonNull(GraphQLString),
            description: "The name of the skill."
        },

        experience: {
            type: GraphQLNonNull(experienceEnum),
            description: "A level of experience with the skill."
        },

        category: {
            type: GraphQLNonNull(GraphQLString),
            description: "A category of the skill - a framework, language, etc."
        }
    }),
})
