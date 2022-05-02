import '@testing-library/jest-dom';
import { loginReducer } from '../../redux/reducers/loginReducer';
import { typesLogin } from '../../redux/types/types'; 
import { loginGoogle, loginSincronico } from '../../redux/actions/actionLogin';

/* Auth - Login */
describe('Verificar el loginReducer desde el loginReducer', () => {
    test('Debe realizar el login de un usuario', () => {
        const initState = {};
        const action = {
            type: typesLogin.login,
            payload: {
                email:'abc',
                password: 'Fernando'
            }
        }

        const state = loginReducer(initState, action );
        expect(state).toEqual({
            id: 'abc',
            name: 'Fernando'
        })

    });

    /* -------------------- Actions -------------------- */

    test('Verificar loginReducer desde actionLogin', () => {
        const initialState = {};
        const action = {
            type: typesLogin.login,
            payload: {
                id:'jose@gmail.com',
                name: 'Jose David'
            }
        }
        const varLoginSincronico = loginSincronico(action.payload.id, action.payload.name);
        const state = loginReducer({}, varLoginSincronico);

        expect(state).toEqual({
            id: 'jose@gmail.com',
            name: 'Jose David'
        })
    })
    
    test('Verificar loginReducer desde loginGoogle', () => {
        const initState = {};

        const action = {
            type: typesLogin.login,
            payload: {
           
            }
        }
        
        const varLoginGoogleSincronico = loginGoogle();
        const state = loginReducer({}, varLoginGoogleSincronico);

        expect(state).toEqual({
         
        })
    })

    test('Verificar TypesLogin.js', () => {
        const types = typesLogin;

        expect(types).toEqual({
            login: 'login',
            logout: 'logout'
        });

    }) 
})

/* Auth - Login */
