import React from 'react';
import {TextField} from 'material-ui/lib';
import {NavigationChevronLeft} from 'material-ui/lib/svg-icons';

export const Foo = React.createClass({
  render() {
    return (
      <div className='foo'>
        <p>Foo</p>
        <NavigationChevronLeft />
        <TextField />
      </div>
    );
  }
});
