// @flow

export type Achievement = {
    title: string,
    year: number,
    year_modifier: YearModifier,
    description: string,
    id: string
};

export type Course = {
    courseID: string,
    name: string,
};

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

export type Program = {
    id: string,
    title: string,
    field: string,
    institution: string,
    location: string,
    year_began: number,
    year_finish?: number,
    courses_ids: Array<string>,
    achievement_ids?: Array<string>,
    group_ids?: Array<string>
};


export type Social = {
    network: string,
    account: string,
    link: string
};

export type StudentGroup = {
    title: string,
    role: string,
    join_year: number,
    exit_year?: number,
    details?: Array<string>,
    id: string
};


export type YearModifier =
    "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" |
    "Winter" | "Spring" | "Summer" | "Fall";
