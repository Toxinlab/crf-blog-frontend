import { Component } from "react";

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <Header />
                <div className="homepage-container">
                    <div className="homepage-introduction">
                        <h1> Greetings, I'm Stefan Crnobrnja. I do not help people learn software development.</h1>
                        <p>I'm (not) a junior full stack software developer that writes about modern Node.js, JavaScript, and development.</p>
                        <p>I'm just here to learn webdev by working on this blog project.</p>
                    </div>
                </div>
                <div className="homepage-latest-blog-posts">
                    <h2>
                        Latest Blog posts
                        <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
                    </h2>
                </div>
                <Footer />
            </div>
        );
    }
}