import React from 'react';
import Footer from './components/footer/Footer';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from './components/post/Post';

// Configure the adapter
Enzyme.configure({ adapter: new Adapter() });

// Snapshot test
it('renders Footer correctly', () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
});

// Test if renders
describe('Post component', () => {
  test('renders', () => {
    const wrapper = shallow(<Post />);

    expect(wrapper.exists()).toBe(true);
  });
});

// Test handleChange event
it('should call onChange prop', () => {
  const handleChangeMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'the-value' }
  };
  const component = Enzyme.shallow(
    <Post
      handleChange={handleChangeMock}
      clearPost={jest.fn()}
      submitNewPost={jest.fn()}
    />
  );
  component
    .find('input')
    .at(0)
    .simulate('change', event.target.value);
  expect(handleChangeMock).toBeCalledWith('the-value');
});
