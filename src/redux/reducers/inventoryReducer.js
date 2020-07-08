import itemsData from '../../itemsData';
import { CATEGORIES } from '../../constants';
import {
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_ITEM_INDEX,
} from '../actions/actionTypes';

const initialState = {
  items: itemsData,
  categories: Object.values(CATEGORIES),
  currentCategoryIndex: 0,
  currentItemIndex: 0,
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY_INDEX: {
      return {
        ...state,
        currentCategoryIndex: action.payload,
      };
    }
    case SET_CURRENT_ITEM_INDEX: {
      return {
        ...state,
        currentItemIndex: action.payload,
      };
    }
    default:
      return state;
  }
};

export default inventoryReducer;
