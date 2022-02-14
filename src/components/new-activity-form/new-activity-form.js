import './new-activity-form.css';
import { Component } from 'react';

class NewActivityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      location: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description, startDate, startTime, endDate, endTime, location } = this.state;
    this.props.addActivity({ title, description, startDate, startTime, endDate, endTime, location })
    this.setState({
      title: '',
      description: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      location: '',
    })
  }
  render() {
    return (
      <form action="" className="New-activity-form" onSubmit={this.handleSubmit} >
        <h1>New activity form</h1>
        <label>
          <span>Activity title:</span>
          <input onChange={this.handleChange} value={this.state.title} name="title" type="text" className="New-activity-form__input" />
        </label>
        <label>
          <span>Activity description:</span>
          <textarea onChange={this.handleChange} value={this.state.description} name='description' rows="4" className="New-activity-form__input" />
        </label>
        <div>
          <label>
            <span>Start date:</span>
            <input onChange={this.handleChange} value={this.state.startDate} name='startDate' type="date" className="New-activity-form__input" />
          </label>
          <label>
            <span>Start time:</span>
            <input onChange={this.handleChange} value={this.state.startTime} name='startTime' type="time" className="New-activity-form__input" />
          </label>
        </div>
        <div>
          <label>
            <span>End date:</span>
            <input onChange={this.handleChange} value={this.state.endDate} name='endDate' type="date" className="New-activity-form__input" />
          </label>
          <label>
            <span>End time:</span>
            <input onChange={this.handleChange} value={this.state.endTime} name='endTime' type="time" className="New-activity-form__input" />
          </label>
        </div>
        <label>
          <span>Activity location:</span>
          <input onChange={this.handleChange} value={this.state.location} name='location' type="text" className="New-activity-form__input" />
        </label>
        <button>Add activity</button>
      </form>
    );
  }
}


export default NewActivityForm;