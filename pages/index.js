// import '../styles/styles.scss';
import Home from '../components/Home';
import Head from 'next/head';

const Index = () => {
    return (
        <div>
            <Head>
            <meta charSet="utf-8" />
            <title>Greenscapes Commercial | Commercial Garden and Grounds Services</title>
            <meta name="description" content="We offer commercial grounds maintenance to a range of
            services including: Care Homes, Retirement Living Complexes, Nurseries, Schools, Industrial
            Grounds, Housing Trusts, Letting Agents" />
            <link rel="canonical" href="https://www.greenscapes-commercial.co.uk" />
            </Head>
           <Home />
        </div>
    )
}

export default Index;