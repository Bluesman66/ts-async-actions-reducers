import { AppDispatch } from "./../../index";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";
import axios from "axios";

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsLoading: (loading: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: loading }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
  login: (username: string, password: string) => (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const response = await axios.get<IUser[]>("./users.json");
        const mockUser = response.data.find((user) => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(mockUser));
        } else {
          dispatch(AuthActionCreators.setError("Incorrect login or password"));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1000);
    } catch (e) {
      dispatch(AuthActionCreators.setError("Login error"));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
    } catch (e) {}
  },
};
