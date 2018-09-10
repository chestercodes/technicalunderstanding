import React from 'react';
import classNames from 'classnames';

export class Work extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var workClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="work" className={workClass}>
        <h2 className="major">Work</h2>
        <p>Technical Understanding Limited is the company owned and operated by <a href="https://chester.codes">Chester Burbidge</a></p>
        <p>Projects in addition to software contracting will live here once they are made...</p>
        <div onClick={() => this.props.endTransitionHandler('work')} className="close">Close</div>
      </article>
    );
  }
}
