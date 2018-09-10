import React from 'react';
import classNames from 'classnames';

export class Contact extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var contactClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="contact" className={contactClass}>
        <h2 className="major">Contact</h2>
        <p>For an idea of my skill set please <a href="https://chester.codes/CV" >checkout my CV</a></p>
        <p>The easiest way to contact me is by email: <a href="mailto:chester@technicalunderstanding.co.uk" >chester@technicalunderstanding.co.uk</a></p>
        <p>Or via <a href="https://www.linkedin.com/in/chestercodes/" >LinkedIn</a></p>
        <div onClick={() => this.props.endTransitionHandler('contact')} className="close">Close</div>
      </article>
    );
  }
}
