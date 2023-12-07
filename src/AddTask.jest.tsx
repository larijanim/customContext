import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTask from './AdTask';

describe('TaskForm Component', () => {
  it('should update input value when typing', () => {
    render(<AddTask />);

    const titleInput = screen.getByLabelText('title:');
 

    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    
    expect(titleInput.value).toBe('New Title');
  });

  // Add more test cases for form submission and other interactions as needed
});
