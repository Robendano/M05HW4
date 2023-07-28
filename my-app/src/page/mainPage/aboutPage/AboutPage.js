import React from "react";
import { useDispatch } from "react-redux";
import { asyncFunctionAction } from "../../../redux/actions/actions";


function AboutPage() {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(asyncFunctionAction())}>after 2 sec</button>
        </div>
    )
}

export default AboutPage