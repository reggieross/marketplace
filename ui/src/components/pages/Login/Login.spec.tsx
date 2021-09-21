import { mount } from 'enzyme';
import React from 'react';
import { Login } from './Login';
import {
  AuthenticationService,
  LoginResp,
  ResponseType,
} from '../../../Service/AuthenticationService';
import { LocationState } from 'history';

describe('Login', () => {
  Object.defineProperty(window, 'location', {
    configurable: true,
  });

  window.location = {
    href: '',
  } as Location;

  describe('Submit Login', () => {
    const setModalOpen = jest.fn();
    let spy = jest.spyOn(AuthenticationService, 'login');
    let onLogin: (userName: string, password: string) => Promise<LoginResp>;

    beforeEach(() => {
      onLogin = async (userName: string, password: string) => {
        return await AuthenticationService.login(userName, password);
      };
      spy.mockResolvedValue(ResponseType.SUCCESS);
    });

    afterEach(() => {
      spy.mockClear();
    });

    it('Should call the submit function when username & password is provided', async () => {
      const loginWrapper = mount(<Login history={{} as LocationState} />);

      loginWrapper
        .find("input[aria-label='password']")
        .simulate('change', { target: { value: 'secret' } });
      loginWrapper
        .find("input[aria-label='username']")
        .simulate('change', { target: { value: 'user' } });

      loginWrapper.find('button').simulate('click');

      expect(spy).toBeCalled();
    });

    it('Should call setModalOpen with false on successful login call', async () => {
      const loginWrapper = mount(<Login history={{} as LocationState} />);

      loginWrapper
        .find("input[aria-label='password']")
        .simulate('change', { target: { value: 'secret' } });
      loginWrapper
        .find("input[aria-label='username']")
        .simulate('change', { target: { value: 'user' } });

      loginWrapper.find('button').simulate('click');

      expect(setModalOpen).toBeCalledWith(false);
    });

    it('Should route to the account page when the ', async () => {
      const loginWrapper = mount(<Login history={{} as LocationState} />);

      loginWrapper
        .find("input[aria-label='password']")
        .simulate('change', { target: { value: 'secret' } });
      loginWrapper
        .find("input[aria-label='username']")
        .simulate('change', { target: { value: 'user' } });

      loginWrapper.find('button').simulate('click');

      expect(setModalOpen).toBeCalledWith(false);
    });

    it('Should not call the submit function when username is not provided', async () => {
      const loginWrapper = mount(<Login history={{} as LocationState} />);

      loginWrapper
        .find("input[aria-label='password']")
        .simulate('change', { target: { value: 'secret' } });

      loginWrapper.find('button').simulate('click');

      expect(spy).toBeCalledTimes(0);
    });

    it('Should not call the submit function when password is not provided', async () => {
      const loginWrapper = mount(<Login history={{} as LocationState} />);

      loginWrapper
        .find("input[aria-label='username']")
        .simulate('change', { target: { value: 'user' } });

      loginWrapper.find('button').simulate('click');

      expect(spy).toBeCalledTimes(0);
    });
  });

  describe('Error Handling', () => {
    const setModalOpen = jest.fn();
    let rejectSpy = jest.spyOn(AuthenticationService, 'login');
    let onLogin: (userName: string, password: string) => Promise<LoginResp>;

    beforeEach(() => {
      onLogin = async (userName: string, password: string) => {
        return await AuthenticationService.login(userName, password);
      };
      rejectSpy.mockResolvedValue({ status: 401, message: '' });
    });

    afterEach(() => {
      rejectSpy.mockClear();
    });
  });
});
