import {
  screen,
  render,
  act,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import ActivitiesSearch, { apiCalls } from './ActivitiesSearch';

describe('<ActivitiesSearch /> Testing', () => {
  let component;

  beforeEach(() => {
    component = render(<ActivitiesSearch />);
  });

  afterEach(() => cleanup());

  describe('<Input /> Tests', () => {
    it('should render input with empty value', () => {
      // I expect to the input element to be render in the document.
      expect(screen.getByTestId('input')).toBeInTheDocument();
      // Also expect to the input element value to be empty at start (i use toBeFalsy() because a empty string is consider a falsy value).
      expect(screen.getByTestId('input').value).toBeFalsy();
    });

    it('should input value change on typing', () => {
      const input = screen.getByTestId('input'); // I save the input element
      const inputWord = 'chs'; // I save the input word
      act(() => {
        fireEvent.change(input, {target: {value: inputWord}}); ; // Simulate user typing inputWord
      });

      expect(input.value).toBe(inputWord); // I expect to input value to be inputWord.
    });
  });

  describe('API Calls Test', () => {
    it('should call api method getAllActivities when input change and input value characters are less than 3', async () => {
      const input = screen.getByTestId('input'); //  I save the input.
      const mockedGetActivitiesFunction = jest.spyOn(
        apiCalls,
        'getAllActivities',
      ); //  I tell to jest to spy the function getAllActivities from apiCalls object and save it at mockedGetActivitiesFunction

      act(() => {
        fireEvent.change(input, {target: {value: 'chs'}});  // Simulate user typing "chs"
      });

     
        // I wait for the debounce time and then expect to mockedGetActivitiesFunction to have been called once
        await waitFor(() => expect(mockedGetActivitiesFunction).toHaveBeenCalledTimes(1));     
    });

    it('should call api method searchActivitiyByTitle when input change and input value characters are more than 3', async () => {
     
      const inputWord = 'taller de manualidades'; //  I save the input word.
      const mockedSearchFunction = jest.spyOn(apiCalls, 'searchResults'); //  I tell to jest to spy the function searchResults from apiCalls object and save it at mockedSearchFunction.

      act(() => {
        const input = screen.getByTestId('input'); //  I save the input.
        fireEvent.change(input, {target: {value: inputWord}}); // Simulate user typing inputWord
      });
        // I wait for the debounce time and then expect to mockedSearchResultsFunction to have been called once with the input word
        await waitFor(() => {
          expect(mockedSearchFunction).toHaveBeenCalledTimes(1)
          expect(mockedSearchFunction).toHaveBeenCalledWith(inputWord);
        });
    });
  });
});
