import {Fragment, ReactElement} from 'react';
import {Counter} from "@/entities/counter";

const Home = () => {
    return (
        <Counter/>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Fragment>{page}</Fragment>;
};

export default Home;
