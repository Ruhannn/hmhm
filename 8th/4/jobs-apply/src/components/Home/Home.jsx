import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import CategoryLIst from '../CategoryList/CategoryLIst';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryLIst></CategoryLIst>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;