import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setMarkDown} from "../../redux/reducers/users";
import Markdown from "markdown-to-jsx";
import {useParams} from 'react-router-dom'

const Mark = () => {
    const dispatch = useDispatch();
    const markDown = useSelector((s)=>s.users.markDown);
    const params = useParams();
    console.log(params);
    useEffect(()=>{
        dispatch(setMarkDown(params.userName, params.reposName))
    },[])
    return (
        <div className='container content'>
           <Markdown>
               {markDown}
           </Markdown>
        </div>
    );
};

export default Mark;