import {
  screen,
  render,
  act,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import ActivitiesSearch, { apiCalls } from './ActivitiesSearch';
import userEvent from '@testing-library/user-event';

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
        userEvent.type(input, inputWord); // Simulate user typing inputWord
      });

      expect(input.value).toBe(inputWord); // I expect to input value to be inputWord.
    });
  });

  describe('<FormHelperText /> Test', () => {
    it('should helper text show a initial text', () => {
      const helperText = screen.getByTestId('helperText'); // i save the helperText element
      const initialText = 'Porfavor Introduzca una Actividad'; // i save the initial text i expect to helperText element have.

      expect(helperText.textContent).toBe(initialText); // I expect the helperText element text content to be equal to the value saved at initial text.
    });

    it('when input value characters are less or equal than 3 helper text shows a message', async () => {
      const input = screen.getByTestId('input'); // i save the input element
      const expectedText = 'Ingrese más de 3 caracteres'; // i save the expected text
      act(() => {
        userEvent.type(input, 'chs'); // Simulate user typing "chs"
      });

      await waitFor(() =>
      // Expect that text content of helper text element to be expectedText
        expect(screen.getByTestId('helperText').textContent).toBe(expectedText),
      );
    });

    it('when input value characters are more than 3 helper text shows a message', async () => {
      const input = screen.getByTestId('input'); // i save the input element
      const inputWord = 'chss'; // i save the input word
      const expectedText = `0 resultados con titulo: ${inputWord}`; // i save the expected text;

      act(() => {
        userEvent.type(input, inputWord); // Simulate user typing inputWord
      });

      await waitFor(() =>
      // Expect that text content of helper text element to be expectedText
        expect(screen.getByTestId('helperText').textContent).toBe(expectedText)
      );
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
        userEvent.type(input, 'chs'); // Simulate user typing "chs"
      });

      await waitFor(() =>
        // I wait for the debounce time and then expect to mockedGetActivitiesFunction to have been called once
        expect(mockedGetActivitiesFunction).toHaveBeenCalledTimes(1),
      ); 
      await waitFor(() =>
        // I wait for the the debounce time as well and expect to results list to be render in the document.  
        expect(screen.queryByTestId('results-list')).toBeInTheDocument(),
      ); 
    });

    it('should call api method searchActivitiyByTitle when input change and input value characters are more than 3', async () => {
      const input = screen.getByTestId('input'); //  I save the input.
      const inputWord = 'taller de manualidades'; //  I save the input word.
      const mockedSearchFunction = jest.spyOn(apiCalls, 'searchResults'); //  I tell to jest to spy the function searchResults from apiCalls object and save it at mockedSearchFunction

      act(() => {
        userEvent.type(input, inputWord); // Simulate user typing inputWord
      });

      await waitFor(() => {
        // I wait for the debounce time and then expect to mockedSearchResultsFunction to have been called once
        expect(mockedSearchFunction).toHaveBeenCalledTimes(1); 
        //And expect to mockedSearchResultsFunction to have been with inputWord as parameter
        expect(mockedSearchFunction).toHaveBeenCalledWith(inputWord);
      });

      await waitFor(() => {
       // I wait for the debounce time as well and expect to results list to be render in the document.  
        expect(screen.queryByTestId('results-list')).toBeInTheDocument();
      })
    });
  });
});
