import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {
  state = {
    handle: 'stevenr2314',
    followerList: [],
    userData: {}
  }

  handleSearch = event => {
    event.preventDefault()
    let handle = this.state.handle.trim()
    axios.get(`https://api.github.com/users/${handle}`)
      .then(resp => {
        console.log(resp.data)
        this.setState({...this.state, userData: resp.data})
      })
      .catch(err => console.log(err))
      this.setState({...this.state,handle: ''})
  }

  handleChange = event => {
    let newValue = event.target.value
    this.setState({handle: newValue})
  }

  componentDidMount() {
      axios.get(`https://api.github.com/users/${this.state.handle}`)
      .then(resp => {
        console.log(resp.data)
        this.setState({...this.state, userData: resp.data})
      })
      .catch(err => console.log(err))
      this.setState({...this.state,handle: ''})
  }

  componentDidUpdate(prevState){
    if (prevState.userData !== this.state.userData){
      console.log('Inside If Statement')
      axios.get(this.state.userData.followers_url)
        .then(resp => this.setState({...this.state, followerList: resp.data}))
        .catch(err => console.log(err))
    }
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
