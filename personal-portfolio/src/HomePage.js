import React, { useState } from 'react';
import {motion} from 'framer-motion'
import styles from "./HomePage.css";
import profilePicture from './assets/Avnoor_Sidhu.jpg';
import dcAppPicture from './assets/dcApp.svg';
import grata1 from './assets/grata.png'
import swiftUILogo from './assets/swift.png'
import mongo from './assets/mongodb-seeklogo2.svg'
import express from './assets/ex.png'
import react from './assets/reactNew.png'
import node from './assets/node-js-seeklogo.svg'
import cocoaPods from './assets/cocoapods.svg'
import ticTacToe from './assets/ticTacToe.png'
import python from './assets/python.png'
import c from './assets/c.png'
import tensorFlow from './assets/Tensorflow.svg.png'
import numpy from './assets/numpy.png'
import terminalDemoVideo from './assets/teminalDemoVideo.mp4'
import terminalDemo from './assets/terminalDemo.gif'
import threading from './assets/multithreadingFinal.png'
import server from './assets/server.png'
import pandas from './assets/Pandas.svg'

function Home() {
    return (
        <div class="home">
            <div class="text-column">
                <h1 className='header'>Hello, I am Avnoor Sidhu</h1>
                <p>I am a Software Engineer at FOCAL Lab. </p>
            </div>
            <div class="image-column">
                <img src={profilePicture} alt="Profile Picture" className="img" />
            </div>
        </div>
    );
  }

function TextLine({ time, company, location, position }) {
    return (
        <div className="experienceText">
            <small className="timeText">{time}</small>
            <strong> {company}</strong>
            <p className="positionText"> {position} </p>
        </div>
    )
}

function Experience() { 
    return (
        <div className="container">
            <h3 className="titles">Experience</h3>
            <hr class="custom-line"></hr>
            <div>
                <TextLine time="Jan 2024 - present" company="Forest Change Analysis Lab" position="Software Engineer" />
                <TextLine time="Jun 2023 - Sep 2023" company="Lawrence Livermore National Laboratory" position="Software Engineer Intern" />
                <TextLine time="Jan 2023 - Jun 2023" company="Solidigm" position="SSD Technical Intern" />
            </div>
        </div>
    );
}


// original
// function Rectangle({ name, image, description, style, logos, imageClassName }) {
//     return (
//         <div className="rectangle" style={style}>
//             <div className="spacing">
//                 <h1 className="title-content">{name}</h1>
//                 <small className="text-content">{description}</small>
//             </div>
//             {/* <img src={image} className="projectImage" /> */}
//             <img src={image} alt={name} className={`default-image-class ${imageClassName}`} />
//             <div className="logo-container">
//                 {logos.map((logo, index) => (
//                     <img key={index} src={logo} alt="Project Logo" className="logo" />
//                 ))}
//             </div>
//         </div>
//     );
// }

// text flipping
// function Rectangle({ name, image, description, style, logos, imageClassName }) {
    // const [isFlipped, setIsFlipped] = useState(false);

    // const handleFlip = () => setIsFlipped(!isFlipped);

//     return (
//         <div className={`rectangle ${isFlipped ? 'is-flipped' : ''}`} style={style}>
//             <div className="card-front">
//                 <div className="spacing">
//                     <h1 className="title-content">{name}</h1>
//                     <small className="text-content">{description}</small>
//                     <button onClick={handleFlip}>Flip</button>
//                 </div>
//                 <img src={image} alt={`Project ${name}`} className={`default-image-class ${imageClassName}`} />
//                 <div className="logo-container">
//                     {logos?.map((logo, index) => (
//                         <img key={index} src={logo} alt={`${name} project logo`} className="logo" />
//                     ))}
//                 </div>
//             </div>
//             <div className="card-back">
//                 <button onClick={handleFlip}>Flip Back</button>
//             </div>
//         </div>
//     );
// }

// card flipping
// function Rectangle({ key, name, image, description, style, logos, imageClassName }) {
//     return (
//         <div className="rectangle" style={style}>
//             <div className="spacing">
//                 <h1 className="title-content">{name}</h1>
//                 <small className="text-content">{description}</small>
//             </div>
//             {/* <img src={image} className="projectImage" /> */}
//             <img src={image} alt={name} className={`default-image-class ${imageClassName}`} />
//             <div className="logo-container">
//                 {logos.map((logo, index) => (
//                     <img key={index} src={logo} alt="Project Logo" className="logo" />
//                 ))}
//             </div>
//         </div>
//     );
// }

function FrontView({ name, image, description, style, logos, imageClassName, handleFlip}) {
    return (
        <div className="rectangle" style={style}>
            <div className="spacing">
                <h1 className="title-content">{name}</h1>
                <small className="text-content">{description}</small>
            </div>
            <div className="buttonstyle">
                <button onClick={handleFlip} className="flip-button">More Details</button>
            </div>
            <img src={image} alt={name} className={`default-image-class ${imageClassName}`} />
            <div className="logo-container">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="Project Logo" className="logo" />
                ))}
            </div>
        </div>
    );
}

// function BackView({ style, handleFlip, details }) {
//     return (
//         <div className="rectangle flip-card-back backView" style={style}>
//             <p>{details}</p>
//         </div>
//     );
// }

function Rectangle({ name, image, description, style, logos, imageClassName, details }) {
    const [isFlipped, setFlipped] = useState(false)
    const handleFlip = () => {
        setFlipped(!isFlipped);
    };
    return (
        <div
            className={`flip-card ${
                isFlipped ? "flipped" : ""
            }`}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <FrontView name={name} image={image} description={description} style={style} logos={logos} imageClassName={imageClassName} handleFlip={handleFlip} />
                </div>
                <div className="flip-card-back">
                    {/* <BackView style={style} handleFlip={handleFlip} details={details} className="flip-card-back"/> */}
                    <p>{details}</p>
                    <button className="flip-button" onClick={handleFlip}>Back</button>
                </div>
            </div>
        </div>
    );
}


function Projects() { 
    const dcDescription = 'Developed the UC Davis Dining Hall App using MERN stack while mentoring a cross-functional team of developers and designers. The app displays menus, allows dietary based filtering, tracks calories, and saved favorite food items.'
    const grataDescription = 'Built iOS native application with five other developers. The app allows building managers easily pair bluetooth locks to tenant units, lock and unlock units, change lock PINs, unpair locks, and other minor acconut management features.'
    const labSchedulerDescription = 'Implemented software to display live server data and availability status using host/client scripts implemented with TCP sockets. Allows engineers to monitor server availablity status so they can reserve it accordingly on Microsoft Teams.'
    const userThreadLibraryDescription = 'Developed a Linux-based user-level thread library, offering an interface for simulating multi-threading and concurrency. Implemented user-thread, semaphore, and preemption API\'s for thread management and proper thread synchronization.'
    const tuneHuntDescription = 'Implemented an interactive map-based game built with React Native. You can collect album covers around your location, add them to your library, and have the Spotfiy page linked so you can discover new music!'
    const ticTacToeDescription = 'Designed and implemented a native iOS Tic-Tac-Toe Application using SwiftUI. The game consists of one/two player mode, 4 levels of difficulty ranging from easy to impossible, customizable names, score tracker, and game sounds.'
    const terminalDescription = 'Developed a custom shell program that handles basic in-built commands, supports multipiping and output redirection, and manages simple environmental variables, ensuring efficient parsing and execution of commands with robust error handling and memory management.'
    const securityCameraDescription = 'Leveraged machine learning and real time image processing to detect and track people in live camera feed. Utilizing TensorFlow\'s convolutional neural networks, the system provides accurate, hardware-independent security monitoring with live alerts.'

    const dcDetails = `
        - Mentored developers, designers, and project manager by providing technical guidance and fostering interpersonal skill development
        - Developed the UC Davis dining commons app with daily macro tracking, filtering food options, and notifications for favorite foods
        - Oversaw designed process which involved market and user research, competitive analysis, user flow creation, wireframing from low to high fidelity, and finally establishing a comprehensive design system.
        - Implemented Google Authentication and notifications using Firebase and web scraped food items using Python
        `
    const grataDetails = `
        - Utilized the Alfred iOS SDK to enable direct pairing and control of locks via Bluetooth
        - Built a Network class to handle all API communications with Grata\'s server via HTTP requests, including authentication and operational commands
        - Integrated Local Authentication framework to support FaceID, requiring initial username and password login followed by biometric authentication for ease of use
        - Used CocoaPods for managing external libraries and frameworks, ensuring stable project dependencies through a podfile configuration
        - The application is now officially published and available for download on the App Store: https://apps.apple.com/ca/app/grata-manager/id6447966708
        `
    const labSchedulerDetails = `
        - Client script on host machine communicates sequentially with multiple server scripts requesting system information
        - Utilized pandas to store data received by client script (server data) in an Excel sheet to allow easy accessibility for Wiki page parsing
        - Comapny's internal Wiki page extracts data from the Excel sheet enabling engineers to monitor server availability and characteristics
        - Configured cron job with python virtual environment to run client script every minute so server availability data remains updated
        - Engineers can reserve the server for long usages by creating an event on Microsoft Teams and the Wiki page will show server is occupied
        - Resulted in streamlined server resource allocation and product is implemented company-wide
        `
    const threadDetails = `
        - Provides interface for creating, running, and managing threads concurrently on Linux.
        - Utilized a doubly-linked list for efficient queue management, aiding in operations like enqueue, dequeue, and node deletion
        - Managed threads across various states (ready, blocked, zombie) with specific queues for each, excluding the singular running thread
        - Implemented semaphores for thread synchronization, managing thread blocking and unblocking based on resource availability
        - Features preemptive scheduling through an interrupt-based scheduler to ensure fair CPU time distribution among threads
        - Employs thread yield functions for context switching between the running and ready threads
        `
    const tuneHuntDetails = `
        - Developed a mobile application that allows users to discover and collect music album covers based on their geographical location
        - Integrated Spotify API to randomly fetch and display music album covers on a map based on the user's location
        - Users can select albums cover if there are in close proximity and add it to their personal library within the app
        - Provided each album's Spotify link so users can have instant access to listen to the respective album
        `
    const ticTacToeDetails = `
        - Utilized XCode and Swift to create a user-friendly and interactive iOS Tic Tac Toe appliation
        - Refactored the app architecture to Model-View-ViewModel (MVVM) to enhance code separation and improve manageability
        - Added animations for X and O pieces and alerts for wins, loses, and draws to enrich the user experience
        `
    const shellDetails = `
        - All user input is parsed into a linked list to efficiently manage commands, arguments, and symbols like pipes and redirection
        - The system call, fork(), us used to create a new child process which uses the input data to run the command using execvp()
        - sshell supports output redirection and piping, including complex scenarios with multiple pipes by properly managing file descriptors
        - Environment variables can be set and used and robust error management ensures incorrect command usage does not happen
        - There are three built in commands (pwd, cd, exit) that execute without forking new processes using functions such as chdir() and getcwd()
        `
    const cameraDetails = `
        - Processed live video frames to detect the presence of persons through a webcam using OpenCV, and resulted in an accuracy of 90%
        - Designed a convolutional neural netwrok with three layers, dropout for overfitting prevention, ReLU activation, and ending with a sigmoid for binary classification
        - Utilized maxpooling layers to reduce spatial dimensions of the feature maps and convolutional layers to decreas computational complexity
        - Implemented class weighting to ensure the model does not become biased towards majority classes and used adam optimizer for efficient convergence by adapting the learning rate
        `

    const projects = [
        { id: 1, name: 'Dining Hall Menu App', description: dcDescription, color: '#F0EDFA', image: dcAppPicture, logos: [mongo, express, react, node], detail: dcDetails },
        { id: 2, name: 'Grata Manager', description: grataDescription, color: '#F0EDFA', image: grata1, logos: [swiftUILogo, cocoaPods] },
        { id: 3, name: 'Lab Scheduler', description: labSchedulerDescription, color: '#F0EDFA', image: server, logos: [python, pandas], details: labSchedulerDetails },
        { id: 4, name: 'User Thread Library', description: userThreadLibraryDescription, color: '#F0EDFA', image: threading, logos: [c] },
        { id: 5, name: 'Tune Hunt', description: tuneHuntDescription, color: '#F0EDFA', image: '/path/to/image5.jpg', logos: [react] },
        { id: 6, name: 'Tic Tac Toe', description: ticTacToeDescription, color: '#F0EDFA', image: ticTacToe, logos: [swiftUILogo] },
        { id: 7, name: 'Simple Shell', description: terminalDescription, color: '#F0EDFA', image: terminalDemo, logos: [c] },
        { id: 8, name: 'Security Camera', description: securityCameraDescription, color: '#F0EDFA', image: '/path/to/image8.jpg', logos: [python, tensorFlow, numpy] }
    ];
    return (
        <div className="container">
            <div>
                <h3 className="titles">Projects</h3>
                <hr class="custom-line"></hr>
            </div>
            <div className="grid">
                {projects.map(project => (
                    <Rectangle
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        style={{ backgroundColor: project.color }}
                        logos={project.logos}
                        imageClassName={project.id === 4 ? 'special-image-style' : ''}
                        detail={project.detail}
                    />
                ))}
            </div>
        </div>
    );
}

function Contact() { 
    return (
        <div className="container">
            <div>
                <h3 className="titles">Contact</h3>
                <hr class="custom-line"></hr>
            </div>
            <p>Are you interested in collaborating or want to connect or chat? If so, hit the contact button down below or contact me via LinkedIn.</p>
        </div>
    );
}

function HomePage() {
    return (
        <div className="HomePage">
            <div id="home">
                <Home />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
  }
  
  export default HomePage;