import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OpenmrsDatePicker, OpenmrsDatePickerProps } from './index';

describe('OpenmrsDatePicker Component', () => {

  it('renders without crashing', () => {
    render(<OpenmrsDatePicker />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with a default date value', () => {
    const defaultValue = new Date(2023, 0, 1); // January 1, 2023
    render(<OpenmrsDatePicker defaultValue={defaultValue} />);
    expect(screen.getByRole('textbox')).toHaveValue('01/01/2023');
  });

  it('calls onChange handler with the correct date', () => {
    const onChangeMock = jest.fn();
    render(<OpenmrsDatePicker onChange={onChangeMock} />);
    fireEvent.click(screen.getByRole('button'));
    const dateToSelect = screen.getByText('15');
    fireEvent.click(dateToSelect);

    expect(onChangeMock).toHaveBeenCalled();
    const selectedDate = new Date(onChangeMock.mock.calls[0][0]);
    expect(selectedDate.getDate()).toBe(15);
  });

  it('disables dates outside of minDate and maxDate', () => {
    const minDate = new Date(2023, 0, 1);
    const maxDate = new Date(2023, 11, 31);
    render(<OpenmrsDatePicker minDate={minDate} maxDate={maxDate} />);

    fireEvent.click(screen.getByRole('button'));
    // Assuming that the December 31 is disabled if it's out of range
    expect(screen.getByText('31')).toBeDisabled();
  });

  it('displays error message when invalid', () => {
    const invalidText = 'Invalid date';
    render(<OpenmrsDatePicker invalid invalidText={invalidText} />);

    expect(screen.getByText(invalidText)).toBeInTheDocument();
  });

  it('renders correctly for different sizes', () => {
    render(<OpenmrsDatePicker size="sm" />);
    expect(screen.getByRole('textbox')).toHaveClass('cds--date-picker-input__wrapper', 'sm');

    render(<OpenmrsDatePicker size="lg" />);
    expect(screen.getByRole('textbox')).toHaveClass('cds--date-picker-input__wrapper', 'lg');
  });

  it('applies light theme when light prop is true', () => {
    render(<OpenmrsDatePicker light />);
    expect(screen.getByRole('textbox')).toHaveClass('cds--date-picker--light');
  });
});
