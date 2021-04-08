export type Program = {
    kind: string,
    field: Array<string>,
    year_began: number,
    year_finish: number,
    courses: Array<Course>,
    ...
}

export type Course = {
    subject: string,
    course: number,
    name: string,
    program: Array<string>
}

const undergrad: Program = {
    kind: "B.Sc. Double Honours",
    field: ["Computer Science", "Philosophy"],
    year_began: 2017,
    year_finish: 2022,
    courses: [
        {
            subject: "CMPT",
            course: 434,
            name: "Computer Networks"
        }
    ]
}

export function getCourses(program: Program): Array<Course> {
    return program.courses
}
