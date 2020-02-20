import React from 'react';
import NotFoundPage from '../../components/Pages/NotFoundPage';
import { shallow } from 'enzyme';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});