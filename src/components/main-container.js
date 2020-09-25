import React, { Component } from 'react';
import BiosPage from './bios';
import ProjectsPage from './projects';
import ResumePage from './resume';
import NavBar from './navbar'
import '../App.css';

class MainContainer extends Component {
    state = {
        displayType: 'bios'
    }
    
    handleViewChange = newView => {
        this.setState({ displayType: newView })
    }

    render() {
        const view = this.state.displayType
        let displayedView;
        if (view == 'bios') {
            displayedView = <BiosPage/>
        } else if (view == 'projects') {
            displayedView = <ProjectsPage/>
        } else {
            displayedView = <ResumePage/>
        }

        return(
            <div className="App">
                    <NavBar onViewChange={this.handleViewChange}/>
                    <div className="App-container" id="App-container">
                        <main role="main">
                             <div>
                                   {displayedView}
                             </div>
                        </main>
                    </div>
                    <footer id="footer" class="container-fluid">
                        <ul class="list-inline col-sm-12" style={{"margin-top": "10px", "margin-bottom": "10px"}}>
                            <li style={{display: "inline-block", padding: "10px"}}><a href="https://github.com/petarhe97" target="_blank" id="image-button"><img src="/GitHub.png"/></a></li>
                            <li style={{display: "inline-block", padding: "10px"}}><a href="https://www.linkedin.com/in/peter-he-549933117/" target="_blank" id="image-button"><img src="/linkedin.png"/></a></li>
                        </ul>
                        <div class="text-center">&copy; {(new Date().getFullYear())}, Zi Hao (Peter) He. All rights reserved.</div>
                        <div class="text-center">Hosted by Github Pages</div> 
                    </footer>   
            </div>
        )
    }
}

export default MainContainer