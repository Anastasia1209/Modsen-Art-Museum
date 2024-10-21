import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './index';
import { useSearch } from '../../hooks/useSearch';

jest.mock('../../hooks/useSearch', () => ({
	useSearch: jest.fn(),
}));

const mockUseSearch = useSearch as jest.MockedFunction<typeof useSearch>;

describe('SearchBar', () => {
	beforeEach(() => {
		mockUseSearch.mockReturnValue({
			query: '',
			setQuery: jest.fn(),
			loading: false,
			error: null,
			validationError: null,
			sortCriterion: 'default',
			setSortCriterion: jest.fn(),
			handleSearch: jest.fn(),
		});
	});

	test('renders search bar with default props', () => {
		render(<SearchBar setSearchResults={jest.fn()} />);

		const input = screen.getByPlaceholderText(/Search Art, Artist, Work.../i);
		expect(input).toBeInTheDocument();

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	test('handles user input and search', () => {
		const setQueryMock = jest.fn();
		const handleSearchMock = jest.fn();

		mockUseSearch.mockReturnValue({
			query: '',
			setQuery: setQueryMock,
			loading: false,
			error: null,
			validationError: null,
			sortCriterion: 'default',
			setSortCriterion: jest.fn(),
			handleSearch: handleSearchMock,
		});

		render(<SearchBar setSearchResults={jest.fn()} />);

		const input = screen.getByPlaceholderText(/Search Art, Artist, Work.../i);
		fireEvent.change(input, { target: { value: 'Mona Lisa' } });
		expect(setQueryMock).toHaveBeenCalledWith('Mona Lisa');

		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(handleSearchMock).toHaveBeenCalled();
	});

	test('displays loading state and errors', () => {
		mockUseSearch.mockReturnValue({
			query: '',
			setQuery: jest.fn(),
			loading: true,
			error: 'Network error',
			validationError: 'Invalid input',
			sortCriterion: 'default',
			setSortCriterion: jest.fn(),
			handleSearch: jest.fn(),
		});

		render(<SearchBar setSearchResults={jest.fn()} />);

		expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

		expect(screen.getByText(/Invalid input/i)).toBeInTheDocument();

		expect(screen.getByText(/Network error/i)).toBeInTheDocument();
	});
});
