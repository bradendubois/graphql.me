import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

import { programType } from "./programType";
import { getProgramsWithCourse } from "../data";

export const courseType = new GraphQLObjectType({

    name: "Course",
    description: "A course taken as part of some program.",
    fields: () => ({

        subject: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The subject of the course.",
            resolve: (course) => course.courseID.split("-")[0]
        },

        course: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "The course number.",
            resolve: (course) => course.courseID.split("-")[1]
        },

        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name or title of the course."
        },

        programs: {
            type: new GraphQLList(programType),
            description: "Any related programs the course was taken for.",
            resolve: (course) => getProgramsWithCourse(course)
        }
    })
})
