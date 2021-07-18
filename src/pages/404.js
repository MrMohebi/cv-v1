import * as React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.css'
import {Helmet} from "react-helmet";

const NotFoundPage = () => {
  return (
    <main>
        <Helmet>
            <meta charSet="utf-8" />
            <title>404</title>
        </Helmet>
        <div className={"d-flex flex-column align-items-center  justify-content-center vw-100 vh-100"}>
            <h1 className={"pb-4"}> You are curious, I like u <br/>But theres isn't anything else ;)</h1>
            <br/><br/><br/>
            <h5 className={"mb-4"}><Link  to={"/"}>Main Page</Link></h5>
        </div>
    </main>
  )
}

export default NotFoundPage
