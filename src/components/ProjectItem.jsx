import React from 'react';

const ProjectItem = ({project}) => {
    return (
        <div className="col-lg-4 text-center">
            <figure className="imghvr-shutter-in-vert">
                <img src={`http://localhost:8080/imageProject/${project.id}`}
                     alt="Image Project"/>
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
                                        src={`http://localhost:8080/logoSkill/${skill.id}`}
                                        alt="Logo Skill"
                                        width="40px"
                                        height="40px"
                                    />
                                </span>
                            )
                        })}
                    </div>
                    <a href={project.link} className="btn draw-border">View</a>
                </figcaption>
            </figure>
        </div>
    );
};

export default ProjectItem