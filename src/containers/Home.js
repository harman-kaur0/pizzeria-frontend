import React from 'react';
import { Button } from "react-bootstrap";
import { RiArrowRightCircleFill } from 'react-icons/ri';



const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1>Exercise?<br/>I thought you said <i>extra slice</i>!</h1>
                <p>freshly made pizza and pasta
                    <br/>
                    <Button variant='dark' role="link" href="/menu">View Menu  <RiArrowRightCircleFill/></Button>
                </p>
            </div>
            <img className="home-pizza-img" src="https://img.freepik.com/premium-photo/tasty-pepperoni-pizza-black-concrete-background_79782-2287.jpg?w=2000" alt="pizza"/>
        </div>
    )
};

export default Home;
