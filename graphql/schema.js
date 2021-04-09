import {
    GraphQLEnumType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from "graphql";

import {getCourse, getEmployment, getProgram, getPrograms, getProgramsWithCourse} from "./data";

import {programType} from "./schema/programType";
import {employmentType} from "./schema/employmentType";


const programEnum = new GraphQLEnumType({

    name: "ProgramEnum",
    description: "Any post-secondary program.",
    values: {
        "undergraduate": {
            value: "undergraduate",
            description: "B.Sc. (Double Honours) in Computer Science & Philosophy"
        },

        "certificate": {
            value: "certificate",
            description: "Certificate in Ethics, Justice, and Law"
        }
    }

});



const achievementType = new GraphQLObjectType({

    name: "Achievement",
    description: "Any achievement earned during or related to an educational program.",
    fields: () => ({

        title: {
            type: GraphQLString,
            description: ""
        },

        year: {
            type: GraphQLInt,
            description: ""
        },

        year_modifier: {
            type: GraphQLString,
            description: ""
        },

        description: {
            type: GraphQLString,
            description: ""
        }
    })
})



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


const courseType = new GraphQLObjectType({

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

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: () => ({

        programs: {
          type: GraphQLList(programType),
          resolve: (_source) => getPrograms()
        },

        program: {
            type: programType,
            args: {
                programName: {
                    description: "Returns details on the given program.",
                    type: programEnum
                }
            },
            resolve: (_source, { programName }) => getProgram(programName)
        },

        course: {
            type: courseType,
            args: {
                courseID: {
                    description: "The subject and course number of the course as 'SUBJ-1234'.",
                    type: GraphQLString
                }
            },
            resolve: (_source, { courseID }) => getCourse(courseID)
        },

        employment: {
            type: GraphQLList(employmentType),
            resolve: (_source) => getEmployment()
        }

    })
})


export const ResumeSchema = new GraphQLSchema({
    query: queryType,
    types: [programType, courseType]
});
