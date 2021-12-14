import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';


test('renders without errors with no props', ()=>{
    render(<Display/>)
});

test('renders Show component when the button is clicked ', async ()=>{
    render(<Display/>)
    const button = screen.getByRole('button')
    userEvent.click(button)

    const show = await screen.findByTestId('show-container')
    expect(show).toBeInTheDocument()
});

test('renders show season options matching your data when the button is clicked', ()=>{
    
});
