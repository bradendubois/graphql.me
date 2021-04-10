// @flow

/************************* Type *************************/

export type Course = {
    courseID: string,
    name: string,
};

/************************* Data *************************/

export const CMPT_141: Course = {
    courseID: "CMPT-141",
    name: "Introduction to Computer Science",
};

export const CMPT_145: Course = {
    courseID: "CMPT-145",
    name: "Principles of Computer Science",
};

export const CMPT_214: Course = {
    courseID: "CMPT-214",
    name: "Programming Principles and Practice",
};

export const CMPT_215: Course = {
    courseID: "CMPT-215",
    name: "Introduction to Computer Organization and Architecture",
};

export const CMPT_260: Course = {
    courseID: "CMPT-260",
    name: "Mathematical Logic and Computing",
};

export const CMPT_270: Course = {
    courseID: "CMPT-270",
    name: "Developing Object-Oriented Systems",
};

export const CMPT_280: Course = {
    courseID: "CMPT-280",
    name: "Intermediate Data Structures and Algorithms",
};

export const CMPT_317: Course = {
    courseID: "CMPT-317",
    name: "Introduction to Artificial Intelligence",
};

export const CMPT_332: Course = {
    courseID: "CMPT-332",
    name: "Operating Systems Concepts",
};

export const CMPT_353: Course = {
    courseID: "CMPT-353",
    name: "Full Stack Web Programming",
};

export const CMPT_360: Course = {
    courseID: "CMPT-360",
    name: "Machines and Algorithms",
};

export const CMPT_364: Course = {
    courseID: "CMPT-364",
    name: "Automata and Formal Languages",
};

export const CMPT_370: Course = {
    courseID: "CMPT-370",
    name: "Intermediate Software Engineering",
};

export const PHIL_120: Course = {
    courseID: "PHIL-120",
    name: "Knowledge Mind and Existence",
};

export const PHIL_133: Course = {
    courseID: "PHIL-133",
    name: "Introduction to Ethics and Values",
};

export const PHIL_206: Course = {
    courseID: "PHIL-206",
    name: "Early Modern Philosophy",
};

export const PHIL_232: Course = {
    courseID: "PHIL-232",
    name: "Ethics and Professional Responsibility in Computer Science",
};

export const PHIL_233: Course = {
    courseID: "PHIL-233",
    name: "Ethical Theory",
};

export const PHIL_236: Course = {
    courseID: "PHIL-236",
    name: "Ethics and Technology",
};

export const PHIL_262: Course = {
    courseID: "PHIL-262",
    name: "Social and Political Philosophy"
};

export const PHIL_319: Course = {
    courseID: "PHIL-206",
    name: "Phenomenology of Merleau-Ponty",
};

export const PHIL_333: Course = {
    courseID: "PHIL-333",
    name: "Metaethics"
};

export const PHIL_433: Course = {
    courseID: "PHIL-433",
    name: "Kantian Ethics"
};

/************************* Array *************************/

export const allCourses: Array<Course> = [

    // CMPT
    CMPT_141, CMPT_145, CMPT_214, CMPT_215, CMPT_260, CMPT_270, CMPT_280,
    CMPT_317, CMPT_332, CMPT_353, CMPT_360, CMPT_364, CMPT_370,

    // PHIL
    PHIL_120, PHIL_133, PHIL_206, PHIL_232, PHIL_233, PHIL_236, PHIL_262,
    PHIL_319, PHIL_333, PHIL_433
];
