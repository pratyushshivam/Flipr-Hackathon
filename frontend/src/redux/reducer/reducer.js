import * as AuthActions from '../actions/actions'
const initialState = {
    userData: [],
    loading: false,
    status: false,
    error: false,
    message: '',
    userSignUpData: [],
    scheduledData: [],
    userLoginData:[]
}


export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AuthActions.SIGN_IN_LOADING:
            return {
                ...state,
                loading: true,
                status: false,
                error: false,
                message: 'sign in is loading',
            }
        case AuthActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                error: false,
                message: 'Sign In Success',
                userData: action.payload,
            }
        case AuthActions.SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                status: false,
                error: true,
                message: action.payload,
            }
        case AuthActions.SIGN_UP_LOADING:
            return {
                ...state,
                loading: true,
                status: false,
                error: false,
                message: 'sign in is loading',
            }
        case AuthActions.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                error: false,
                message: 'Sign In Success',
                userSignUpData: action.payload,
            }
        case AuthActions.SIGN_UP_ERROR:
            return {
                ...state,
                loading: false,
                status: false,
                error: true,
                message: action.payload,
            }
        case AuthActions.SCHEDULE_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                error: false,
                scheduledData: action.payload,
            }
            case AuthActions.LOG_IN_LOADING:
                return {
                    ...state,
                    loading: true,
                    status: false,
                    error: false,
                    message: 'sign in is loading',
                }
            case AuthActions.LOG_IN_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    status: true,
                    error: false,
                    message: 'Sign In Success',
                    userLoginData: action.email,
                }
            case AuthActions.LOG_IN_ERROR:
                return {
                    ...state,
                    loading: false,
                    status: false,
                    error: true,
                    message: action.payload,
                }
        default:
            return state
    }
}
