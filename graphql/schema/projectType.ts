import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql";


const Link = new GraphQLObjectType({
    name: "Link",
    description: "A short-hand for a link, with a title / display text and a possibly a URL.",
    fields: () => ({

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "The text to display for this link if it were presented visually, such as on a web page."
        },

        url: {
            type: GraphQLString,
            description: "An optional URL to use as an href / link associated with this title."
        }
    })
})


const Repository = new GraphQLObjectType({
    name: "Repository",
    description: "A short-hand for a link, with a title / display text and a possibly a URL.",
    fields: () => ({

        host: {
            type: GraphQLNonNull(GraphQLString),
            description: "The host platform of the repository, such as 'github' or 'gitlab'."
        },

        owner: {
            type: GraphQLString,
            description: "If not under a 'default' assumed account, this is provided to indicate the account the " +
                "repository is hosted under."
        },

        repository: {
            type: GraphQLNonNull(GraphQLString),
            description: "The name of the repository."
        },

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "The description or title to associate with the repository if it were publicly displayed."
        }
    })
})


const MarkdownBlock = new GraphQLObjectType({
    name: "MarkdownBlock",
    description: "A title and content block describing an associated project.",

    fields: () => ({
        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "The title of a section of content."
        },

        markdown: {
            type: GraphQLNonNull(GraphQLString),
            description: "A string of valid Markdown describing the associated project."
        }
    })
})

export const projectType = new GraphQLObjectType({

    name: "Project",
    description: "A publicly available project to showcase.",
    fields: () => ({

        title: {
            type: GraphQLNonNull(GraphQLString),
            description: "The title of the project."
        },

        description: {
            type: GraphQLNonNull(GraphQLString),
            description: "A brief description of the project."
        },

        id: {
            type: GraphQLNonNull(GraphQLString),
            description: "An ID for the project for any bookkeeping / query purposes."
        },

        repositories: {
            type: GraphQLList(Repository),
            description: "A list of any repositories related to the project.",
            resolve: (project) => Object.values(project.repositories ?? {})
        },

        collaborators: {
            type: GraphQLList(Link),
            description: "Any related collaborators for the respective project.",
            resolve: (project) => Object.values(project.collaborators ?? {})
        },

        related: {
            type: GraphQLList(Link),
            description: "Any related non-repository, non-collaborator links.",
            resolve: (project) => Object.values(project.related ?? {})
        },

        year_start: {
            type: GraphQLNonNull(GraphQLInt),
            description: "Year the project began."
        },

        year_start_detail: {
            type: GraphQLNonNull(GraphQLString),
            description: "Month the project began."
        },

        year_end: {
            type: GraphQLInt,
            description: "Year the project completed."
        },

        year_end_detail: {
            type: GraphQLString,
            description: "Month the project completed."
        },

        content: {
            type: GraphQLNonNull(GraphQLList(MarkdownBlock)),
            description: "A list of sections of content in Markdown describing the project.",
            resolve: (project) => Object.values(project.content)
        }
    }),
})
