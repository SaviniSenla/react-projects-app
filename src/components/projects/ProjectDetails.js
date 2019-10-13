import React from 'react';

const ProjectDetatils = (props) => {
    const id = props.match.params.id;
    console.log(id);
    return(
        <div className="container section project-container">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">2019– GPS IMU based collar system for problem elephants using NB-IoT (Final Year Project) - {id}</span>
                    <p>The project mainly focused on tracking the real-time location of
                        elephants and collect behavioral data for decision making and
                        initiate necessary actions to prevent elephant-human conflicts.
                        The system provides real-time notifications for emergencies
                        that support authorities to mitigate the risk efficiently. The
                        main challenge is to build a robust device that uses less power,
                        maintaining the accuracy of measures and, reliable connection
                        with the server.Google firebase and the Things.io have used as
                        the cloud platforms. The system purely implemented on modern
                        concepts like serverless architecture which backed with Google
                        cloud functions</p>
                </div>
                <div className="card-action grey lighten-4 grey-text text-darken-1">
                    <div>Posted by Savini</div>
                    <div>10th Oct. 2019</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetatils;