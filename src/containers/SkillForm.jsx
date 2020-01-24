import React, {Component} from 'react';

class SkillForm extends Component {
    render() {
        return (
            <div className="projects p-5 w-75 mx-auto border">
                <h3 className="border-bottom mb-5 py-3">Skills</h3>
                <form>
                    <div className="form-group my-3">
                        <input type="text" className="form-control"
                               placeholder="Name"/>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleFormControlSelect1">Categories</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>HTML/CSS</option>
                            <option>Javascript</option>
                            <option>Back-End</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="input-group my-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02"
                                   aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose
                                file</label>
                        </div>
                    </div>
                    <div className="form-check my-3">
                        <input className="form-check-input" type="radio" name="exampleRadios"
                               id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Is Framework
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default SkillForm;