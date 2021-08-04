// @flow

export type Achievement = {
    title: string
    when: Time
    description: string
    id: string
};

export type Course = {
    courseID: string
    name: string
};

export type Employment = {
    title: string
    description: Array<string>
    institution: string
    location: string
    duration: Duration
};

export type Program = {
    id: string
    title: string
    field: string
    institution: string
    location: string
    duration: Duration
    courses_ids: Array<string>
    achievement_ids?: Array<string>
    group_ids?: Array<string>
};


export type Social = {
    network: string
    account: string
    link: string
};

export type StudentGroup = {
    title: string
    role: string
    duration: Duration
    details?: Array<string>
    id: string
};

export type Skill = {
    category: string
    experience: string
    name: string
}

type Link = {
    title: string
    url?: string
}

type Repository = {
    title: string
    host: string
    account?: string
    repository: string
}

export type Project = {
    id: string
    content: {
        title: string
        markdown: string
    }[]
    description: string
    related: Array<Link>
    repositories: Array<Repository>
    duration: Duration
}

export type YearModifier =
    "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" |
    "Winter" | "Spring" | "Summer" | "Fall";

export type Time = {
    year: number
    detail: String
}

export type Duration = {
    start: Time
    end?: Time
}
