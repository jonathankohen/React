import React, { Component } from "react";

class Course extends Component {
  render() {
    return (
      <article className="Course">
        <h1>{this.props.match.params.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </article>
    );
  }
}

export default Course;
