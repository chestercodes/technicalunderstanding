import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import classNames from 'classnames';

import '../styles/main.css';
import '../styles/noscript.css';
import '../styles/custom.css';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: null,
      header: true,
      main: true,
      footer: true,
      modal: {
        intro: false,
        work: false,
        about: false,
        contact: false,
      }
    }
  }

  startArticleTransition(name) {
    document.body.classList.add('is-article-visible');

    this.setState({
      header: false,
      footer: false,
      main: true,
      modal: {
        [name]: true,
      },
    });
  }

  endArticleTransition(name) {
    document.body.classList.remove('is-article-visible');

    this.setState({
      header: true,
      footer: true,
      main: false,
      modal: {
        [name]: false
      },
    });
  }

  render() {

    var mainClass = classNames({
      'dimensions-hide': !this.state.main,
    });

    var mainId = classNames({
      'main': this.state.main,
    });

    var footerClass = classNames({
      'dimensions-hide': !this.state.footer,
    });

    var footerId = classNames({
      'footer': this.state.footer,
    });

    return (
      <div>
    			<div id="wrapper">
            <Header class={this.state.header} transitionHandler={(name) => this.startArticleTransition(name)}/>
    					<div id={mainId} className={mainClass}>
                <Work class={this.state.modal.work} endTransitionHandler={(name) => this.endArticleTransition(name)} />
                <Contact class={this.state.modal.contact} endTransitionHandler={(name) => this.endArticleTransition(name)} />
              </div>
    					<footer id={footerId} className={footerClass}>
    						<p><a href="https://pixabay.com/en/clifton-suspension-bridge-bridge-2496334/">Image source</a></p>
    					</footer>
    			</div>
    			<div id="bg"></div>
      </div>
    );
  }
}
