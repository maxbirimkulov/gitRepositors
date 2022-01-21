import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../redux/reducers/users";
import "./repos.css"

const Repos = () => {
    const userName = useParams();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getRepos(userName.userName))
    },[]);
    const reposArr = useSelector((s) => s.users.repos)


    return (
        <>
            <nav className="#424242 grey darken-3">
                <div className="nav-wrapper">
                    {/*<img className="repos__img" src={reposArr[0].owner.avatar_url} alt="user-avatar"/>*/}
                    <a href="#" className="brand-logo">{userName.userName}</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={`/`}>Home</Link></li>

                    </ul>
                </div>
            </nav>
            <div className="repos container">
                <table className="centered">
                    <thead>
                    <tr>
                        <th>Repository</th>
                        <th>Link</th>
                        <th>Last update</th>
                    </tr>
                    </thead>

                    <tbody>
                    {reposArr.map((el) => {
                        return <tr key={el.id}>
                            <td><Link to={`/${userName.userName}/${el.name}`}>{el.name}</Link></td>
                            <td><a href={el.html_url} target='_blank'>Go to GitHub</a></td>
                            <td><span >{el.updated_at.slice(0, 10)} - {el.updated_at.slice(11, 19)}</span></td>
                            </tr>
                    })}

                    </tbody>
                </table>
            </div>
        </>

    );
};

export default Repos;