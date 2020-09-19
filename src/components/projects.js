import React, { Component } from 'react';
import "../stylesheets/projects.css"

class ProjectsPage extends Component {


    render() {
        return(
            <div id="project-cards-container">
                <div class="card-deck">
                    <div class="card mb-3 shadow">
                        <div class="card-header"><h5>Input sorting WebApp</h5></div>
                        <div class="card-body">
                            <p class="card-text">
                                Simple sorting react webapp with a node.js backend that takes either integral or text values as input, sends request to backend and returns steps of sorting back.
                                Steps of sorting are also stored in a SQLite database as they are being sorted.
                            </p>
                        </div>
                    </div>
  
                    <div class="card mb-3 shadow">
                        <img class="card-img-top" src="/rpg.png" alt="Card image cap" height="300px"/>
                        <div class="card-header"><h5>2D Tactical Game</h5></div>
                        <div class="card-body">
                            <p class="card-text">
                                Turn-based tactical RPG developed in Java that brings you the adventure of a hero who fights against enemies of the Kingdom. Made as a small project with
                                3 other friends, where I was mainly responsible for the object oriented design, procedurally generated item system, and most of the character class
                                creation. 
                            </p>
                        </div>
                    </div>
  
                    <div class="card mb-3 shadow">
                        <div class="card-header"><h5>Personal Website</h5></div>
                        <div class="card-body">
                            <p class="card-text">
                                The ongoing personal website project where the result is this website. Currently the website is built mainly as a react webapp with bootstrap for some
                                customized CSS for styling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage