import React from 'react';
import classNames from 'classnames';

export class Header extends React.Component{

  constructor(props) {
    super(props);
  }


  render() {
    var headerClass = classNames({
      'dimensions-hide': !this.props.class,
      'header-center': true,
    });

    var headerId = classNames({
      'header': this.props.class,
    });

    return (
      <header id={headerId} className={headerClass}>
        <div className="content">
          <div className="inner">
            <h1>Technical Understanding</h1>
            <p>Limited</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#work" onClick={() => this.props.transitionHandler('work')}>Work</a></li>
            <li><a href="#contact" onClick={() => this.props.transitionHandler('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }


}
