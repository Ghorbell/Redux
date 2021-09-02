import { ADD_TASK, EDIT_TASK, FILTER, REMOVE_TASK, TOGGLE } from "../action/constants";

const initialState = {
  List: [
    { id: 1, description: "Do some coding", isDone: false },
    { id: 2, description: "Clean the dishes", isDone: false },
    { id: 3, description: "Go For a walk", isDone: false },
  ],
  status: "All",
};

export const todoReducer = (state=initialState,{type,payload}) => {
   switch (type) {
     case ADD_TASK:
       return {
         ...state,
         List: [...state.List, payload],
       };
     case EDIT_TASK:
       return {
         ...state,
         List: state.List.map((el) =>
           el.id === payload.id
             ? { ...el, description: payload.description }
             : el
         ),
       };
     case REMOVE_TASK:
       return {
         ...state,
         List: state.List.filter((elmt) => elmt.id !== payload),
       };
     case TOGGLE:
       return {
         ...state,
         List: state.List.map((elmt) =>
           elmt.id === payload ? { ...elmt, isDone: !elmt.isDone } : elmt
         ),
       };
     case FILTER:
       return {
         ...state,
         status: payload,
       };
     default:
       return state;
   }
}


