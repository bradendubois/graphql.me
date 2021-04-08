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
    programs: Array<Program>
}


const undergrad: Program = {
    kind: "B.Sc. Double Honours",
    field: ["Computer Science", "Philosophy"],
    year_began: 2017,
    year_finish: 2022,
    courses: ["CMPT-434"]
}

const CMPT_434 = {
    subject: "CMPT",
    course: 434,
    name: "Computer Networks",
    programs: [undergrad]
}

const courses: {| [courseID: string]: Course |} = {
    [`${CMPT_434.subject}-${CMPT_434.course}`]: CMPT_434
}


const programs: {| [program: string]: Program |} = {
    ["undergrad"]: undergrad
}

export function getProgram(program: string): Program {
    console.log("Got", program)
    return undergrad
    return programs[program] ?? undergrad
}

export function getCourses(program: Program): Array<Course> {
    return program.courses.map(courseID => getCourse(courseID))
}

export function getCourse(courseID: string): Course | null {
    return courses[courseID] ?? null
}