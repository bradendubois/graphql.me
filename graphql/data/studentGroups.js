// @flow

/************************* Type *************************/

export type StudentGroup = {
    title: string,
    role: string,
    join_year: number,
    exit_year?: number,
    details?: Array<string>,
    id: string
};

/************************* Data *************************/

export const ASSU: StudentGroup = {
    title: "Arts and Science Students' Union",
    role: "Technical Manager",
    join_year: 2017,
    exit_year: 2020,
    details: [
        "Responsible for maintaining the ASSU website (assu.usask.ca).",
        "General technical support."
    ],
    id: "assu"
};

export const CompetitiveProgrammingClub: StudentGroup = {
    title: "Competitive Programming Club",
    role: "Member",
    join_year: 2019,
    details: [
        "The Competitive Programming Club collaborates to share information and strategies amongst its members to improve at competitive programming in the form of contests and various online judges."
    ],
    id: "cpc"
};

export const CST: StudentGroup = {
    title: "Cyber Security Team",
    role: "Member",
    join_year: 2019,
    exit_year: 2020,
    id: "cst"
};

export const CSSS: StudentGroup = {
    title: "Computer Science Students' Society",
    role: "Member",
    join_year: 2017,
    id: "csss"
};

/************************* Array *************************/

export const allStudentGroups: Array<StudentGroup> = [ ASSU, CompetitiveProgrammingClub, CST, CSSS ];
