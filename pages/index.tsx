import Head from 'next/head'
import GraphiQL from 'graphiql';
import "graphiql/graphiql.min.css"

const defaultQuery =
`# GraphiQL Resume
#
# Learn more on GraphQL: https://graphql.org/ 
#
# See my website: https://bradendubois.dev
# See the source: https://github.com/bradendubois/graphql.me
#
# Hint: Not all data is shown by default :)

{
  programs {
    title
    field
    year_start
    year_end
  }
  
  employment {
    title
    location
    description
    year_start
    year_end
  }
  
  achievements {
    title,
    description
    year
    year_detail
  }
  
  groups {
    title
    role
    year_start
    year_end
  }
  
  socials {
    network
    account
    link
  }
  
  projects {
    
    title
    description

    repositories {
        host
        owner
        repository
        title
    }
    
    collaborators {
      title
      url
    }
  }
}
`

const Home = () => (

    <div>
        <Head>
            <title>GraphQL | api.bradendubois.dev</title>
            <meta charSet="UTF-8" />
            <meta property="og:title" content="GraphQL | api.bradendubois.dev" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.api.bradendubois.dev" />
            <meta property="og:description" content="GraphQL API of Braden Dubois" />
        </Head>

        <main>
            <GraphiQL
                fetcher={async graphQLParams => {
                    const data = await fetch(
                        '/api',
                        {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(graphQLParams),
                            credentials: 'same-origin',
                        },
                    );
                    return data.json().catch(() => data.text());
                }}
                
                query={defaultQuery}
            />
        </main>
    </div>
);

export default Home