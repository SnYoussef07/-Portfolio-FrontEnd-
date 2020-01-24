import React, {Component} from 'react';

class ProjectForm extends Component {
    render() {
        return (
            <div className="projects p-5 w-75 mx-auto border">
                <h3 className="border-bottom mb-5 py-3">Project</h3>
                <form>
                    <div className="form-group my-3">
                        <input type="text" className="form-control"
                               placeholder="Name"/>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                               value="option1"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Java</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">HTML</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                               value="option3"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">React</label>
                    </div>
                    <div className="form-group my-3">
                        <input type="text" className="form-control"
                               placeholder="Link"/>
                    </div>
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"
                                   aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose
                                file</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default ProjectForm;