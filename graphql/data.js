// @flow

/************************* Types *************************/

export type YearModifier =
    "January" | "February" | "March" | "April" |
    "May" | "June" | "July" | "August" |
    "September" | "October" | "November" | "December" |
    "Winter" | "Spring" | "Summer" | "Fall"

export type Program = {
    kind: string,
    major: string,
    year_began: number,
    year_finish?: number,
    courses: Array<Course>,
    achievements?: Array<Achievement>,
    groups?: Array<StudentGroup>
}

export type Course = {
    courseID: string,
    name: string,
}

export type Employment = {
    title: string,
    description: Array<string>,
    institution: string,
    location: string,
    start_year: number,
    start_month: string,
    end_year?: number,
    end_month?: string
}

export type Achievement = {
    title: string,
    year: number,
    year_modifier: YearModifier,
    description: string,
}

export type StudentGroup = {
    title: string,
    role: string,
    join_year: number,
    exit_year?: number,
    details?: Array<string>,
    id: string
}

/************************* Data *************************/

const CMPT_141: Course = {
    courseID: "CMPT-141",
    name: "Introduction to Computer Science",
}

const CMPT_145: Course = {
    courseID: "CMPT-145",
    name: "Principles of Computer Science",
}

const CMPT_214: Course = {
    courseID: "CMPT-214",
    name: "Programming Principles and Practice",
}

const CMPT_215: Course = {
    courseID: "CMPT-215",
    name: "Introduction to Computer Organization and Architecture",
}

const CMPT_260: Course = {
    courseID: "CMPT-260",
    name: "Mathematical Logic and Computing",
}

const CMPT_270: Course = {
    courseID: "CMPT-270",
    name: "Developing Object-Oriented Systems",
}

const CMPT_280: Course = {
    courseID: "CMPT-280",
    name: "Intermediate Data Structures and Algorithms",
}

const CMPT_317: Course = {
    courseID: "CMPT-317",
    name: "Introduction to Artificial Intelligence",
}

const CMPT_332: Course = {
    courseID: "CMPT-332",
    name: "Operating Systems Concepts",
}

const CMPT_353: Course = {
    courseID: "CMPT-353",
    name: "Full Stack Web Programming",
}

const CMPT_360: Course = {
    courseID: "CMPT-360",
    name: "Machines and Algorithms",
}

const CMPT_364: Course = {
    courseID: "CMPT-364",
    name: "Automata and Formal Languages",
}

const CMPT_370: Course = {
    courseID: "CMPT-370",
    name: "Intermediate Software Engineering",
}

const PHIL_120: Course = {
    courseID: "PHIL-120",
    name: "Knowledge Mind and Existence",
}

const PHIL_133: Course = {
    courseID: "PHIL-133",
    name: "Introduction to Ethics and Values",
}

const PHIL_206: Course = {
    courseID: "PHIL-206",
    name: "Early Modern Philosophy",
}

const PHIL_232: Course = {
    courseID: "PHIL-232",
    name: "Ethics and Professional Responsibility in Computer Science",
}

const PHIL_233: Course = {
    courseID: "PHIL-233",
    name: "Ethical Theory",
}

const PHIL_236: Course = {
    courseID: "PHIL-236",
    name: "Ethics and Technology",
}

const PHIL_262: Course = {
    courseID: "PHIL-262",
    name: "Social and Political Philosophy"
}

const PHIL_319: Course = {
    courseID: "PHIL-206",
    name: "Phenomenology of Merleau-Ponty",
}

const PHIL_333: Course = {
    courseID: "PHIL-333",
    name: "Metaethics"
}

const PHIL_433: Course = {
    courseID: "PHIL-433",
    name: "Kantian Ethics"
}


const TA_145: Employment = {
    title: "Teaching Assistant",
    institution: "University of Saskatchewan",
    location: "Saskatoon, SK",
    description: [
        "Teaching Assistant for CMPT 145 - Principles of Computer Science"
    ],
    start_year: 2021,
    start_month: "January",
    end_year: 2021,
    end_month: "April"
}

const MA_145: Employment = {
    title: "Marking Assistant",
    institution: "University of Saskatchewan",
    location: "Saskatoon, SK",
    description: [
        "Marking Assistant for CMPT 140 - Introduction to Creative Computing"
    ],
    start_year: 2020,
    start_month: "September",
    end_year: 2020,
    end_month: "December"
}

const RA: Employment = {
    title: "Student Research Assistant",
    description: [
        "Research Assistant under the supervision of Dr. Eric Neufeld.",
        "Concentrated focus on causal inference in statistics such as the do-calculus of Judea Pearl et. al."
    ],
    institution: "University of Saskatchewan",
    location: "Saskatoon, SK",
    start_year: 2020,
    start_month: "May",
}


const CS_USRA: Achievement = {
    title: "Computer Science USRA",
    description: "Recipient of a Department of Computer Science Undergraduate Student Research Assistant award. Research conducted under the supervision of Dr. Eric Neufeld for the Spring/Summer of 2020.",
    year: 2020,
    year_modifier: "Spring",
}

const Competitive_Programming: Achievement = {
    title: "Competitive Programming",
    description: "Winning team of the Advanced category for the Local Qualifier in the ACM Inter-Collegiate Programming Contest at the University of Saskatchewan. Competed in the Rocky Mountain Regional Qualifier in Edmonton in October 2019.",
    year: 2019,
    year_modifier: "Fall"
}

const Unix_Bootcamps: Achievement = {
    title: "Unix Bootcamp Presentations",
    description: "Co-prepared and delivered intermediate-level presentations for the CSSS's Unix Bootcamp.",
    year: 2019,
    year_modifier: "Fall"
}


const ASSU: StudentGroup = {
    title: "Arts and Science Students' Union",
    role: "Technical Manager",
    join_year: 2017,
    exit_year: 2020,
    details: [
        "Responsible for maintaining the ASSU website (assu.usask.ca).",
        "General technical support."
    ],
    id: "assu"
}

const CompetitiveProgrammingClub: StudentGroup = {
    title: "Competitive Programming Club",
    role: "Member",
    join_year: 2019,
    details: [
        "The Competitive Programming Club collaborates to share information and strategies amongst its members to improve at competitive programming in the form of contests and various online judges."
    ],
    id: "cpc"
}

const CST: StudentGroup = {
    title: "Cyber Security Team",
    role: "Member",
    join_year: 2019,
    exit_year: 2020,
    id: "cst"
}

const CSSS: StudentGroup = {
    title: "Computer Science Students' Society",
    role: "Member",
    join_year: 2017,
    id: "csss"
}

/************************* Maps *************************/

const allCourses: Array<Course> = [

    // CMPT
    CMPT_141, CMPT_145, CMPT_214, CMPT_215, CMPT_260, CMPT_270, CMPT_280,
    CMPT_317, CMPT_332, CMPT_353, CMPT_360, CMPT_364, CMPT_370,

    // PHIL
    PHIL_120, PHIL_133, PHIL_206, PHIL_232, PHIL_233, PHIL_236, PHIL_262,
    PHIL_319, PHIL_333, PHIL_433
]



const employment: Array<Employment> = [
    RA, TA_145, MA_145
]


const achievements: Array<Achievement> = [
    CS_USRA, Competitive_Programming, Unix_Bootcamps
]

const student_groups: Array<StudentGroup> = [
    ASSU, CompetitiveProgrammingClub, CST, CSSS
]




const undergrad: Program = {
    kind: "B.Sc. Double Honours",
    major: "Computer Science &Philosophy",
    year_began: 2017,
    courses: allCourses,
    achievements: [CS_USRA, Competitive_Programming, Unix_Bootcamps],
    groups: student_groups
};

const certificate: Program = {
    kind: "Certificate of Proficiency",
    major: "Ethics, Justice, and Law",
    year_began: 2017,
    year_finish: 2020,
    courses: [PHIL_233, PHIL_236, PHIL_262, PHIL_333, PHIL_433]
};

const programs: {| [program: string]: Program |} = {
    ["undergrad"]: undergrad,
    ["certificate"]: certificate
};




/************************* Functions *************************/

export function getPrograms(): Array<Program> {
    return [undergrad, certificate]
}

export function getProgram(program: string): Program {
    return programs[program] ?? undergrad
}

export function getCourse(courseID: string): Course | null {
    return allCourses.find(course => course.courseID === courseID) || null
}

// TODO - revise this
export function getProgramsWithCourse(course: Course): Array<Program> {
    let tentative = []
    if (undergrad.courses.indexOf(course) > -1) tentative.push(undergrad)
    if (certificate.courses.indexOf(course) > -1) tentative.push(certificate)
    return tentative
}

export function getEmployment(): Array<Employment> {
    return employment
}

export function getAchievements(): Array<Achievement> {
    return achievements
}

export function getStudentGroup(groupID: string): StudentGroup | null {
    return student_groups.find(group => group.id === groupID) || null
}

export function getStudentGroups(): Array<StudentGroup> {
    return student_groups
}
