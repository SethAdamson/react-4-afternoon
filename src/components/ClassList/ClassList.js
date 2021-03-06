import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
    })
  }

  render() {
    let {students} = this.state;
    let classStudents = students.map((elem, i) => {
      return (
        <Link key={i} to={`/student/${elem.id}`}> <h3>{elem.first_name} {elem.last_name}</h3></Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {classStudents}
        <hr />
        <Link to='/'>
          <button>BACK</button>
        </Link>
      </div>
    )
  }
}