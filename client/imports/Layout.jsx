import React from 'react';

export const Layout = React.createClass({
  propTypes: {
    content: React.PropTypes.any.isRequired
  },  

  render() {
    return (
      <div className='layout'>
        <main>{this.props.content}</main>
      </div>
    );  
  }
});
