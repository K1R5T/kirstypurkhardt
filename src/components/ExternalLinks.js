import React from 'react'
import GitHubLogo from '../img/github.png'
import LinkedInLogo from '../img/linkedIn.png'
import CodeNationLogo from '../img/codenation.png'
import Navbar from './Navbar'

export default function ExternalLinks() {
    return (
        <div className="linksContainer">
            <Navbar/>

            <div>
                <h1>External Links</h1>
            </div>

            <div class="gitHubLinkContainer">

                <h2 class="githubTitle">My Github</h2>

                <div>
                    <a href="https://github.com/K1R5T">
                        <img src={GitHubLogo} alt="github logo"/></a>
                    <p class="gitHubDescription">
                        The above image is a link to my GitHub, on there at the moment I have a couple of repositories, one
                        which is
                        a website I created when I did the 3 week Develop Coding course with CodeNation.
                    </p>
                </div>
            </div>

            <div class="linkedInContainer">

                <h2 class="linkedInTitle">My LinkedIn Profile</h2>
                <div>
                    <a href="https://www.linkedin.com/in/kirsty-purkhardt/">
                    <img src={LinkedInLogo} alt="LinkedIn logo"/></a>
                    <p class="linkedInDescription">
                        I have attached my LinkedIn account for you to look at and see what projects I have been working on if
                        you wish to.
                    </p>
                </div>
            </div>

            <div class="codeNationContainer">

                <h2 className="codeNationTitle">Where I got started</h2>
                <div>
                    <a href="https://wearecodenation.com/">
                    <img src={CodeNationLogo} alt="Code Nation logo"/></a>
                    <p>
                    I have attched the website for CodeNation so that you can see who they are and what they have to offer,
                    because without these guys I would not be where I am today.
                    </p>
                </div>
            </div>

        </div>

    )
}
