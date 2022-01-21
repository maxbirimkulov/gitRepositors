import React, {useEffect} from 'react';
import "./home.css"
import {useDispatch, useSelector} from "react-redux";
import {useHistory,useParams} from "react-router-dom"
import {getRepos, handleSubmit, resetArr} from "../../redux/reducers/users";
import axios from "axios";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector((s) => s.users.users);

    const getName = (e) => {
        e.preventDefault();
        dispatch(handleSubmit(e.target[0].value));
        axios(`https://api.github.com/users/${e.target[0].value}/repos`)
            .then(({data})=>{
                    history.push(`/${e.target[0].value}`)
            }).catch((err)=>{
            dispatch(handleSubmit(''));
        })
    };
    useEffect(()=>{
        dispatch(resetArr())

    },[]);

    return (
        <div className="home">
            <form className="home__form" onSubmit={getName}>
                <h5>User`s repository search</h5>
                <input defaultValue='' className="home__search " type="text" placeholder="Enter username"/>
                <button className="home__btn" type="submit">Find repository</button>
            </form>
        </div>
    );
};

export default Home;