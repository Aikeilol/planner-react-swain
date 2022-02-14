import './App.css';
import './components/new-activity-form/new-activity-form';
import NewActivityForm from './components/new-activity-form/new-activity-form';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = { activites: [] }
  }

  addActivity = (activity) => {
    this.setState(({ activites }) => ({
      activites: [...activites, activity]
    }))
  }

  render() {
    return (
      <div className="App">
        <NewActivityForm addActivity={this.addActivity} />
      </div>
    )
  }
}

export default App;
