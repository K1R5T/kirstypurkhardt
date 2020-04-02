import React from 'react'
import me from '../img/me.jpeg'
// import { Route } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home() {
    return (

        <div className="homeContainer">
            <Navbar />
            <div className="homeTitle">
                <h1>Kirsty Purkhardt Portfolio</h1>
            </div>

            <div className="topContainer">
            
                <div clasName="imgMe">
                    <img src={me} alt="pic of me"/>
                </div>

                <div className="lists">
                    
                    <div className="learnt">
                        <h3 className="underlineThingsList">Things I have Learnt :</h3>

                        <ul className="learntList">
                            <li>Java Script</li>
                            <li>HTML</li>
                            <li>Css</li>
                            <li>React</li>
                            <li>React Dom</li>
                            <li>React Router Dom</li>
                            <li>Flexbox</li>
                            <li>Django Girls</li>
                            <li>And more</li>
                        </ul>
                    </div>
                
                    <div className="projects">
                        <h3 className="underlineProjectsList">Projects Done</h3>
                        <ol className="projectsList">
                            <li>Zen Garden</li>
                            <li>Cyber Pet</li>
                            <li>Car Park</li>
                            <li>Dice game 1 player</li>
                            <li>React page Replicas</li>
                            <li>Twitter Clone (group project)</li>

                        </ol>
                    </div>
                </div>
            </div>
            <div className="joinContainer">
        
                <h3 className="underlineWhy">Why I joined CodeNation</h3>
                <p>
                    I joined CodeNation to gain the skills I need to become a Software Developer, but that is not the only
                    reason. I have wanted to work with technology since I was young and CodeNation was recommended by my brother
                    who knew they would look after me and help me fulfill my dreams of working with technology.
                </p>
            </div>
            <div className="targetsContainer">
                <h3 className="underlineTargets">Week One Targets</h3>
                <p>
                    In week one I hope to learn the basics of Javascript, and have a basic understanding of how functions work,
                    the correct syntax to use and how it all fits together.
                </p>
            </div>
            <div className="week1Master">
                <h3 className="underlineWeek">Week 1 Master Coding</h3>
                <p>
                    I have completed week one of the Master Coding Course and now understand the basics of Javascript, I have
                    learnt many different things including functions, loops and if else, I have learnt a lot more than this but
                    these are the few that I spent the most time on in week one to help me get a better understanding of what
                    they are, what they do and how they work.
                </p>
            </div>
            <div className="updateContainer">
                <h3 className="underlineSix">Week Six</h3>
                <p>
                    The end of week six on the Master Coding Course, so far in the past few weeks I have learnt a lot and done some projects to put these new skills into action.
                </p>
                <h4 className="underlineStarting">Starting Projects</h4>
                <p>
                    I have started a few projects, some are complete and some still need working on, but overall I am quite happy with how far I have come, especially since I had not done anything like this before I joined Code Nation. 
                    <br></br>
                    It has not been easy at times, and I have wanted to give up, but I persisted and got over these hurdles. Learning React has probably been one of the toughest things to learn so far, not because of the language used or the content needed, but the fact there are many ways to get your work how you want it. 
                    <br></br>
                    When you are told to change everything from one format to another and you have no idea what has just been asked of you because you didn't understand and  so your head feels like it is about to explode, just Stop! take a break and come back to it because if you over think the situation you could end up having a mini breakdown like I did, just because I wanted to understand so badly and get the work done, it is not worth the stress, the work will still be there after a little break so take 5 and breathe.
                </p>
            </div>
        </div>
    )
}
