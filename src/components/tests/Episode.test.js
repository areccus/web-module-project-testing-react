import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from '../Episode';

const testEpisode = {
    id: 1,
    name: '',
    image: 'http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg',
    season: 1,
    number: 1,
    summary: 'test summary',
    runtime: 1

}

const testEpisode2 = {
    id: 1,
    name: '',
    image: null,
    season: 1,
    number: 1,
    summary: 'test summary',
    runtime: 1

}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>)
    const sumTest = screen.queryByText(/test/i)
    expect(sumTest).toBeInTheDocument()
});




test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testEpisode2}/>)
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(image).toBeInTheDocument()
});
