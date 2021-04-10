import Head from 'next/head'
import GraphiQL from 'graphiql';
import "graphiql/graphiql.min.css"

import "../styles/Home.module.css"

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
                        '/api/graphql',
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
            />
        </main>

    </div>
);

export default Home