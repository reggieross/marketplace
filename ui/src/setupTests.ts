import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import fetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter() });
fetchMock.enableMocks();