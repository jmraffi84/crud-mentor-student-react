import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nopage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h4>Sorry You are location or search not identified</h4>
            <p>Please Click the below link to Go Back</p>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default Nopage