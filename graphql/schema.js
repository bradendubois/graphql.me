import {
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLInterfaceType,
    GraphQLObjectType, GraphQLInt,
} from "graphql";

import {getProgram, getCourses, getCourse} from "./data";

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

const courseEnum = new GraphQLEnumType({

    name: "CourseEnum",
    description: "Any course taken.",
    values: {
        "CMPT-434": {
            value:"C"
        }
    }
})


const programType = new GraphQLObjectType({

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
            resolve: (program) => getCourses(program)
        }
    }),
})


const courseType = new GraphQLObjectType({

    name: "Course",
    description: "A course taken as part of some program.",
    fields: () => ({

        subject: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The subject of the course."
        },

        course: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "The course number."
        },

        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name or title of the course."
        },

        programs: {
            type: new GraphQLList(programType),
            description: "Any related programs the course was taken for.",
            resolve: (program) => getProgram(program)
        }

    })
})

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: () => ({

        program: {
            type: programType,
            args: {
                programName: {
                    description: "If omitted, returns the most recent program completed. If provided, returns details on the given program.",
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
        }

    })
})

export const ResumeSchema = new GraphQLSchema({
    query: queryType,
    types: [programType, courseType]
});
