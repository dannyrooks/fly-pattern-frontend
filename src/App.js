import React from 'react';
import { connect } from 'react-redux'


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/patterns', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
  const patterns = this.props.patterns.map((pattern, index) => <li key={index}>{pattern.comment} </li>)
    return (
      <div className="App">
        <h1>
          Fly Pattern App
        </h1>
        <ul>
          {this.props.loading ? <h3>Loading.....</h3> : patterns}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patterns: state.patternReducer.patterns,
    loading: state.patternReducer.loading
  }
}

export default connect(mapStateToProps)(App);
