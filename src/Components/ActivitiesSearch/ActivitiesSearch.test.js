import { screen, render, act, cleanup, fireEvent, waitFor} from '@testing-library/react';
import ActivitiesSearch, { apiCalls }  from './ActivitiesSearch';
import { getAllActivities, searchActivityByTitle} from '../../Services/activitiesService';
import userEvent from '@testing-library/user-event';

describe('<ActivitiesSearch /> Testing', () => {

  jest.mock("axios");

  let component;

  beforeEach(() => {
    component = render (<ActivitiesSearch />);
  })

  afterEach(() => cleanup);

  it('should render input with empty value',  () => {
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByTestId('input').value).toBeFalsy()
  })

  it('should input value change on typing', () => {
    const input = screen.getByTestId('input');
    const inputWord = 'chs'
    act(() => {
      userEvent.type(input, inputWord);
    });

    expect(input.value).toBe(inputWord)
  })

  it('should helper text show a initial text', () => {
    const helperText = screen.getByTestId('helperText');
    const initialText = 'Porfavor Introduzca una Actividad';

    expect(helperText.textContent).toBe(initialText);
  })

  it('when input value characters are less or equal than 3 helper text shows a message', async () => {
    const input = screen.getByTestId('input');
    act(() => {
      userEvent.type(input, 'chs');
    });

    await waitFor(() => expect(screen.getByTestId('helperText').textContent).toBe('Ingrese más de 3 caracteres'));

  })

  it('when input value characters are more than 3 helper text shows a message', async () => {
    const input = screen.getByTestId('input');
    act(() => {
      userEvent.type(input, 'chss');
    });

    await waitFor(() => expect(screen.getByTestId('helperText').textContent).toBe('0 resultados con titulo: chss'));
  })

  it('should call api method getAllActivities when input change and input value characters are less than 3', async () => {
    const input = screen.getByTestId('input');
    const mockedGetActivitiesFunction = jest.spyOn(apiCalls, 'getAllActivities');
    act(() => {
      userEvent.type(input, 'chs');
    });
    
    await waitFor(() => expect(mockedGetActivitiesFunction).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.queryByTestId('results-list')).toBeInTheDocument());
  })

  it('should call api method searchActivitiyByTitle when input change and input value characters are more than 3', async () => {
    const input = screen.getByTestId('input');
    const inputWord = 'taller de manualidades';
    const mockedSearchFunction = jest.spyOn(apiCalls, 'searchResults');

    act(() => {
      userEvent.type(input, inputWord);
    });

    expect(input.value).toBe(inputWord);
    await waitFor(() => {
      expect(mockedSearchFunction).toHaveBeenCalledTimes(1)
      expect(mockedSearchFunction).toHaveBeenCalledWith(inputWord)
    });
    await waitFor(() => expect(screen.queryByTestId('results-list')).toBeInTheDocument());

  })
})