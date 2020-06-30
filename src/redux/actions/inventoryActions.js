import { SET_CURRENT_CATEGORY_INDEX } from './actionTypes';

export const setCurrentCategoryIndex = index => ({
  type: SET_CURRENT_CATEGORY_INDEX,
  payload: index,
});
