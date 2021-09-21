const initState = {};

const eventReducer = (state = initState, action): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
