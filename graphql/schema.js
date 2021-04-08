import {
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLInterfaceType,
    GraphQLObjectType,
} from "graphql";

import { getCourses } from "./data";

const programEnum = new GraphQLEnumType({

    name: "Program",
    description: "Any post-secondary program.",
    values: {
        "UNDERGRADUATE": {
            value: 1,
            description: "B.Sc. (Double Honours) in Computer Science & Philosophy"
        }
    }

});

const programInterface = new GraphQLInterfaceType({

    name: "Program",
    description: "Any post-secondary program.",
    fields: () => ({



    }),

})