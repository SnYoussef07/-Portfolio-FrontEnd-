import React from 'react';

const ProjectItem = ({project}) => {
    return (
        <div className="col-lg-4 text-center animeProject">
            <figure className="imghvr-shutter-in-vert">
                <img src={`http://194.99.20.122:8080/imageProject/${project.id}`}
                     alt="Project"/>
                <div className="btnPhone text-center">
                    <a href={project.link} className="btn btn-info">View</a>
                </div>
                <figcaption>
                    <h3 className="mb-3">{project.name}</h3>
                    <div className="mb-5">
                        {project.skills && project.skills.map(skill => {
                            return (
                                <span key={skill.id} className="mr-2">
                                    <img
                                        src={`http://194.99.20.122:8080/logoSkill/${skill.id}`}
                                        alt="logo Skill"
                                        width="40px"
                                        height="40px"
                                    />
                                </span>
                            )
                        })}
                    </div>
                    <a href={`http://${project.link}`} className="btn draw-border">View</a>
                </figcaption>
            </figure>
        </div>
    );
};

export default ProjectItem
