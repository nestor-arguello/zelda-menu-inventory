import itemsData from '../../itemsData';
import { CATEGORIES } from '../../constants';
import {
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_GRID_BOX_INDEX,
} from '../actions/actionTypes';

const initialState = {
  items: itemsData,
  categories: Object.values(CATEGORIES),
  currentCategoryIndex: 0,
  currentGridBoxIndex: 0,
  isItemSelected: false,
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY_INDEX: {
      return {
        ...state,
        currentCategoryIndex: action.payload,
        isItemSelected: false,
      };
    }
    case SET_CURRENT_GRID_BOX_INDEX: {
      if (state.currentGridBoxIndex === action.payload) {
        return {
          ...state,
        currentGridBoxIndex: action.payload,
        isItemSelected: !state.isItemSelected,
        }
      }
      return {
        ...state,
        currentGridBoxIndex: action.payload,
      };
    }
    default:
      return state;
  }
};

export default inventoryReducer;
