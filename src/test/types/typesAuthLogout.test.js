import '@testing-library/jest-dom';
import { loginReducer } from '../../redux/reducers/loginReducer';
import { typesLogin } from '../../redux/types/types'; 
import { loginSincronico, logoutSync } from '../../redux/actions/actionLogin';

/* Auth - Logout */
describe('Verificar el logout desde loginReducer', () => {
    test('Debe realizar el logout de un usuario', () => {
        const initState = {};
        const action = {
            type: typesLogin.logout,
        }

        const state = loginReducer( initState, action );
        expect(state).toEqual({
          
        })

    });

    /* -------------------- Actions -------------------- */

    test('Verificar loginReducer desde el actionLogin', () => {
        const initialState = {};
        const action = {
            type: typesLogin.logout,
        }

        /* actionLogin => logoutSync */
        const varLoginSincronico = logoutSync(action);
        /* actionLogin => logoutSync */

        const state = loginReducer(initialState ,varLoginSincronico);

        expect(state).toEqual(initialState)

    })

    test('Verificar TypesLogout.js', () => {
        const types = typesLogin;

        expect(types).toEqual({
            login: 'login',
            logout: 'logout'
        });

    }) 
})

/* Auth - Login */
