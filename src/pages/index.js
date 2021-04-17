/* Entry Point of the Application */
import React from "react"
import Navbar from "../components/navbar";
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
    <Navbar></Navbar>
    <p>Hello there</p>
    </Layout>
  )
}

export default IndexPage
