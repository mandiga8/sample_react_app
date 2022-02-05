import {render, screen} from '@testing-library/react'
import Header1 from './Header1'

test('Test Header', () => {
    render(<Header1/>);
    const headerText = screen.getByText("Sample React Application");
    expect(headerText).toBeInTheDocument;
});