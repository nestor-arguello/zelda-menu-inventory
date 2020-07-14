import {
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_GRID_BOX_INDEX,
} from './actionTypes';

export const setCurrentCategoryIndex = index => ({
  type: SET_CURRENT_CATEGORY_INDEX,
  payload: index,
});

export const setcurrentGridBoxIndex
 = index => ({
  type: SET_CURRENT_GRID_BOX_INDEX,
  payload: index,
});
