import { TypesAction } from "../enums";
import { ActionType, INote, SideBarType } from "../types";

export const initialSideBarState = {
  value: "",
  selectedTags: [],
  tags: [],
}


type SideBarReducerType = (state: SideBarType, action: ActionType, notes: INote[]) => SideBarType;
const sideBarReducer: SideBarReducerType = (state = initialSideBarState, action, notes) => {
  const totalTags = notes.map(note => note.tags);
  const uniqueTags = Array.from(new Set(totalTags.flat()));
  state.tags = uniqueTags;
  switch (action.type){
    case TypesAction.toggleTag:
      return state
    default:
      return state;
  }
}

export default sideBarReducer;