import { render, screen } from '@testing-library/react';
import App from '../App';
import logo from '../logo.js'

describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = render(<App logo={logo} />);
        expect(wrapper).toBeTruthy();

        const header = screen.getByTestId('content-app');
        expect(header).toBeInTheDocument();

        const link = screen.getByRole('link', { name: /learn react/i });
        expect(link).toBeInTheDocument();

        expect(screen.getByText('Learn React').closest('a')).toHaveAttribute('href', 'https://reactjs.org')
    });
})