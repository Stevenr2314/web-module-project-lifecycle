import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {
  state = {
    handle: '',
    followerList: [],
    githubURL: 'https://api.github.com/users/stevenr2314',
    userData: {}
  }

  handleSearch = event => {
    event.preventDefault()
    let handle = this.state.handle.trim()
    this.setState({...this.state, githubURL: `https://api.github.com/users/${handle}`, handle: ''})
    console.log('SEARCHING')
  }

  handleChange = event => {
    let newValue = event.target.value
    this.setState({handle: newValue})
  }

  componentDidMount() {
      axios.get(this.state.githubURL)
      .then(resp => {
        console.log(resp.data)
        this.setState({...this.state, userData: resp.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <form onSubmit={this.handleSearch}> 
        <input 
          name='handle'
          type='text'
          placeholder='Github Handle'
          value={this.state.handle} 
          onChange={event => this.handleChange(event)}/>
        <button type='submit'>Search</button>
      </form>

      <User user={this.state.userData}/>
      <FollowerList followerList={this.state.followerList}/>
    </div>);
  }
}

export default App;
