import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BussinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BussinessSummary></BussinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;