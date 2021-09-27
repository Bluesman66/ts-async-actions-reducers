import { EventAction, EventActionEnum, EventState } from "./types";

const initState = {
  guests: [],
  events: [],
};

const eventReducer = (state = initState, action: EventAction): EventState => {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EventActionEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

export default eventReducer;
