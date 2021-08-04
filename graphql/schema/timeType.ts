import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";


export const timeType = new GraphQLObjectType({

    name: "Time",
    description: "Any year & month/season used to specify a timeframe for any event or duration.",
    fields: () => ({

        detail: {
            type: GraphQLString,
            description: "Either a month or general season to specify the time of year."
        },

        year: {
            type: GraphQLInt,
            description: "The year specified."
        }
    })
})


export const durationType = new GraphQLObjectType({

    name: "duration",
    description: "Any pair of times to specify a 'start' and optional 'end'.",
    fields: () => ({

        start: {
            type: GraphQLNonNull(timeType),
            description: "The start/beginning time of the duration."
        },

        end: {
            type: timeType,
            description: "An optional 'end'/completion time for the duration."
        }
    })
})
