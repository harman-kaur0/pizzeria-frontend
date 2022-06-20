import React from 'react';
import { Button } from "react-bootstrap";
import { RiArrowRightCircleFill } from 'react-icons/ri';



const Home = () => {
    return (
        <div class="home-container">
            <div class="home-text">
                <h1>Exercise?<br/>I thought you said <i>extra slice</i>!</h1>
                <p>freshly made pizza and pasta
                    <br/>
                    <Button variant='dark' role="link" href="/menu">View Menu  <RiArrowRightCircleFill/></Button>
                </p>
            </div>
            <div class="home-pizza-img">
                <img src="https://www.seekpng.com/png/full/0-6914_free-icons-png-pizza-png.png" alt="pizza"/>
            </div>
        </div>
    )
};

export default Home;
