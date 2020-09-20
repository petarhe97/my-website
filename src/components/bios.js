import React, { Component } from 'react';
import "../stylesheets/bios.css"

class BiosPage extends Component {

    render() {
        return(
            <div class="center-block container">
                <div class="center-block" style={{width: "800px"}}>
                    <img class="img-responsive img-circle center-block" id="bios-photo" src="circle_portrait.png"/>
                    <h1 id="bios-name">Peter He</h1>
                    <p id="bios-title">
                        Computer Science Student
                    </p>
                    <p id="bios-title">
                        University of Waterloo
                    </p>
                    <hr id="separator"/>
                    <p id="bios-body">
                        Hello! I'm Peter, a recently graduated Computer Science student looking for full time opportunities.
                    </p>
                    <p id="bios-body">
                        My passion for programming started in Highschool where I was able to create a matching game through using a Pascal-like language called Turing. <br/>
                        This made me realize my interest in bringing ideas into existence, and I thought programming was the perfect medium for doing so.<br/> Even until this day, my first and foremost hope is to 
                            make sure the products and features I ship out are something I can be proud of, easy to be maintained, and desired by its users.
                    </p>
                    <p id="bios-body">
                            Before my graduation at University of Waterloo, I had the opportunity to work at companies such as Lifion by ADP, TribalScale, and Flipp Corp. <br/>These internships allowed me to
                            have an in-depth understanding of backend development and introduced me to mobile development as well. <br/>Some languages I have worked with include Golang,
                            Javascript, Python, Java and Kotlin.
                    </p>
                    <p id="bios-body">
                            To learn more about my previous experiences and qualifications, please visit my projects and resume pages.
                    </p>
                </div>
            </div>
        )
    }
}

export default BiosPage