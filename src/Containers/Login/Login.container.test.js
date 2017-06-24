import React from 'react'
import { shallow } from 'enzyme'
import { LoginContainer } from './Login.container'

describe('Login Container', () => {
  let _spies = {};
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
      update: _spies.update = jest.fn(),
    };
    _wrapper = shallow(
      <LoginContainer {..._props} />
    );
  });

  test('Should render as a <View>.', () => {
    expect(_wrapper.is('View')).toBe(true);
  });

});
