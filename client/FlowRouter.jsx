import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './imports/Layout.jsx';
import {Foo} from './imports/Foo.jsx';

FlowRouter.route('/', {
  action() {
    console.log('foo');
    mount(Layout, {
      content: <Foo />
    });
  }
});
