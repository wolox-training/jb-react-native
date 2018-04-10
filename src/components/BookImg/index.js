import React, { Component } from 'react';

export default class BookImg extends Component {
  render() {
    if (!this.props.src){
      return <div className={this.props.classNameNoImg}></div>
    }

    return <img alt="img" className={this.props.classNameImg} src={this.props.src}/>
  }
}
