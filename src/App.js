import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {
  state = {
    handle: '',
    followerList: []
  }

  handleSearch = handle => {
    console.log('SEARCHING')
  }

  handleChange = event => {
    newValue = event.target.value
    this.setState({handle: newValue})
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/stevenr2314")
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }
  render() {
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <form> 
        <input 
          name='handle'
          type='text'
          placeholder='Github Handle'
          value={this.state.handle} 
          onChange={event => this.handleChange(event)}/>
        <button type='submit' onClick={this.handleSearch}>Search</button>
      </form>

      <User />
      <FollowerList followerList={this.state.followerList}/>
    </div>);
  }
}

export default App;
