// @flow

/************************* Type *************************/

export type Employment = {
    title: string,
    description: Array<string>,
    institution: string,
    location: string,
    start_year: number,
    start_month: string,
    end_year?: number,
    end_month?: string
};

/************************* Data *************************/

export const TA_145: Employment = {
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
};

export const MA_145: Employment = {
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
};

export const RA: Employment = {
    title: "Student Research Assistant",
    description: [
        "Research Assistant under the supervision of Dr. Eric Neufeld.",
        "Concentrated focus on causal inference in statistics such as the do-calculus of Judea Pearl et. al."
    ],
    institution: "University of Saskatchewan",
    location: "Saskatoon, SK",
    start_year: 2020,
    start_month: "May",
};

/************************* Array *************************/

export const allEmployments: Array<Employment> = [ RA, TA_145, MA_145 ];
