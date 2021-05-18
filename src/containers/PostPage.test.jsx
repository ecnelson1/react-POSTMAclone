import React from 'react';
import {render, cleanup} from '@testing-library/react';
import PostPage from '../containers/PostPage';
describe('PostPage',() => {
    afterEach(() => cleanup());
    it('renders the PostMAclone app', () => {
    const { asFragment } = render(<PostPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

