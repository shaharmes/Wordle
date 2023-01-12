import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { navContext } from "../context/NavContext";
import { navType } from "../hooks/useNav";

export function Home() {

    const {user} = useContext(navContext) as navType;
    
    return (
        <>
            <br/><br/><br/><br/>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <>
                            <h1 className="fw-light">Welcome {user ? user: 'Guest'}!</h1>
                            <br></br>
                            <br></br>
                            <Link to={'/wordle'} type="button" className="btn btn-outline-primary">Play!</Link>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}