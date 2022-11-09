import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('teste a pagina do login', () =>{
test('testa se rota começa com /', () =>{
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
})
test('Testa se campos input/botão estão na tela', () =>{
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByPlaceholderText(/nome/i);
    expect(inputName).toBeInTheDocument();
    const inputEmail = screen.getByPlaceholderText(/email/i);
    expect(inputEmail).toBeInTheDocument();
    const buttonPlay = screen.getByRole('button', {name:/play/i})
    expect(buttonPlay).toBeInTheDocument();
    const buttonSettings = screen.getByRole('button', {name:/settings/i})
    expect(buttonSettings).toBeInTheDocument();
});
test('testa comportamento do botão play', () =>{
    renderWithRouterAndRedux(<App />);
    const buttonPlay = screen.getByRole('button', {name:/play/i})
    expect(buttonPlay).toBeDisabled();
    const inputName = screen.getByPlaceholderText(/nome/i);
    userEvent.type(inputName, 'Miguel')
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'emailteste@gmail.com');
    expect(buttonPlay).not.toBeDisabled();
});
test('testa se chama função handleCLick', () =>{
    renderWithRouterAndRedux(<App />);
    screen.logTestingPlaygroundURL()
    const inputName = screen.getByPlaceholderText(/nome/i);
    userEvent.type(inputName, 'Miguel')
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'emailteste@gmail.com');
    const buttonPlay = screen.getByRole('button', {name:/play/i})
    userEvent.click(buttonPlay)
})
test('testa comportamento botão settings', async () =>{
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonSettings = screen.getByRole('button', {name:/settings/i})
    userEvent.click(buttonSettings);
   const title= await screen.findByRole('heading', {name: /configurações/i} )
    expect(title).toBeInTheDocument();
    //questionar pathname monitoria
    // expect(history.location.pathname).toBe('/settings');

})

})