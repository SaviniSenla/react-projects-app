import React from 'react';

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text ext-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Savini</p>
                <p className="grey-text">10th Oct 2019</p>
            </div>
        </div>
    )
}

export default ProjectSummary;