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
 //   courses: []
}

const CMPT_434 = {
    subject: "CMPT",
    course: 434,
    name: "Computer Networks",
    programs: [undergrad]
}


const programs: {| [program: string]: Program |} = {
    ["undergrad"]: undergrad
}

export function getProgram(program: string | null): Program {
    return undergrad
    return programs[program] ?? undergrad
}
