import {
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_ITEM_INDEX,
} from './actionTypes';

export const setCurrentCategoryIndex = index => ({
  type: SET_CURRENT_CATEGORY_INDEX,
  payload: index,
});

export const setCurrentItemIndex = index => ({
  type: SET_CURRENT_ITEM_INDEX,
  payload: index,
});
