import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('teste a pagina do login', () =>{

it('testa se rota começa com /', () =>{
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
})

it('Testa se campos input/botão estão na tela', () =>{
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
it('testa comportamento do botão play', () =>{
    renderWithRouterAndRedux(<App />);
    const buttonPlay = screen.getByRole('button', {name:/play/i})
    expect(buttonPlay).toBeDisabled();
    const inputName = screen.getByPlaceholderText(/nome/i);
    userEvent.type(inputName, 'Miguel')
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'emailteste@gmail.com');
    expect(buttonPlay).not.toBeDisabled();
});

it('Testa se ao clicar no botão play o usuário é redirecionado para rota /game', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonPlay = screen.getByRole('button', {name:/play/i})
    const inputName = screen.getByPlaceholderText(/nome/i);
    userEvent.type(inputName, 'Miguel')
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'emailteste@gmail.com');

    userEvent.click(buttonPlay);
    const token = localStorage.getItem('token');
    expect(token).toBeDefined();
    await screen.findByText(/miguel/i)
})
});