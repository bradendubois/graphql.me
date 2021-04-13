// @flow

/************************* Type *************************/

export type Social = {
    network: string,
    account: string,
    link: string
};

/************************* Data *************************/

export const Github: Social = {
    network: "Github",
    account: "bradendubois",
    link: "https://github.com/bradendubois"
}

export const LinkedIn: Social = {
    network: "LinkedIn",
    account: "bradendubois",
    link: "https://linkedin.com/in/bradendubois"
}

export const Email: Social = {
    network: "email",
    account: "braden.dubois@usask.ca",
    link: "mailto:braden.dubois@usask.ca",
}

export const GraphQL_Page: Social = {
    network: "GraphQL Page",
    account: "api.bradendubois.dev",
    link: "https://api.bradendubois.dev/"
}

export const GraphQL_API: Social = {
    network: "GraphQL API",
    account: "api.bradendubois.dev/api",
    link: "https://api.bradendubois.dev/api"
}

export const Website: Social = {
    network: "Website",
    account: "bradendubois.dev",
    link: "https://bradendubois.dev"
}

/************************* Array *************************/

export const allSocials: Array<Social> = [ Website, Github, LinkedIn, Email, GraphQL_Page, GraphQL_API, Website ];
