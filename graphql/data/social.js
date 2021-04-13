// @flow

/************************* Type *************************/

export type Social = {
    id: string,
    link: string
};

/************************* Data *************************/

export const Github = {
    id: "bradendubois",
    link: "https://github.com/bradendubois"
}

export const LinkedIn = {
    id: "bradendubois",
    link: "https://linkedin.com/in/bradendubois"
}

export const Email = {
    id: "braden.dubois@usask.ca",
    link: "mailto:braden.dubois@usask.ca",
}

export const GraphQL_Page = {
    id: "api.bradendubois.dev",
    link: "https://api.bradendubois.dev/"
}

export const GraphQL_API = {
    id: "api.bradendubois.dev/api",
    link: "https://api.bradendubois.dev/api"
}

export const Website = {
    id: "bradendubois.dev",
    link: "https://bradendubois.dev"
}

/************************* Array *************************/

export const allSocials: Array<Social> = [ Website, Github, LinkedIn, Email, GraphQL_Page, GraphQL_API, Website ];
