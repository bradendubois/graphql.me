import {
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLObjectType, GraphQLInt,
} from "graphql";

import {
    getPrograms,
    getProgram,
    getProgramsWithCourse,
    getCourse,
    getEmployment
} from "./data";

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



const employmentType = new GraphQLObjectType({
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
            description: "Descriptions of research or employment, including any relevant duties."
        },

        start_year: {
            type: GraphQLNonNull(GraphQLInt),
            description: "Year research or employment began."
        },

        start_month: {
            type: GraphQLNonNull(GraphQLString),
            description: "Month research or employment began."
        },

        end_year: {
            type: GraphQLInt,
            description: "Year research or employment completed."
        },

        end_month: {
            type: GraphQLString,
            description: "Month research or employment completed."
        }
    })
})

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
