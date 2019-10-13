import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from "../../store/actions/projectActions";

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text tex-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">title</label>
                        <textarea id = "title" className="materialize-textarea"onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">content</label>
                        <textarea id="content" className="materialize-textarea"onChange={this.handleChange}/>
                    </div>
                    <button className="btn pink lighten-1 z-depth-0" >submit</button>
                </form>
            </div>
        );
    }

}

const matchDispatchToProp = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
};

export default connect(null, matchDispatchToProp)(CreateProject);