import '@testing-library/jest-dom';
import { registerSync } from "../../redux/actions/actionRegister";
import { registerReducer } from "../../redux/reducers/registerReducer";
import { typesRegister } from "../../redux/types/types";

/* Auth - Register */
describe('Debe verificar el registerReducer desde el registerReducer', () => {
    test('Debe realizar el register de un usuario', () => {
        const initState = {};
        const action = {
            type: typesRegister.register,
            payload: {
                email: 'josedavid@gmail.com',
                pass: '1234',
                name: 'Jose David Bolivar'
            }
        }

        const state = registerReducer( initState, action );
        expect(state).toEqual({
            email: 'josedavid@gmail.com',
            pass: '1234',
            name: 'Jose David Bolivar'
        })
        
    });

    /* -------------------- Actions -------------------- */

    test('Verificar registerReducer desde actionRegister', () => {
        const initialState = {};
        const action = {
            type: typesRegister.register,
            payload: {
                email: 'josedavid@gmail.com',
                pass: '1234',
                name: 'Jose David Bolivar'
            }
        }

        const {email, pass, name} = action.payload;

        const varRegisterSincronico = registerSync(email, pass, name);
        const state = registerReducer(initialState, varRegisterSincronico);

        expect(state).toEqual({
            email: 'josedavid@gmail.com',
            pass: '1234',
            name: 'Jose David Bolivar'
        })
    
    })

    test('Verificar TypesLogout.js', () => {
        const types = typesRegister;

        expect(types).toEqual({
            register: 'register',
        });

    }) 
})