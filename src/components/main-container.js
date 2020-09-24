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
            </div>
        )
    }
}

export default MainContainer