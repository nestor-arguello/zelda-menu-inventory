import { createSelector } from 'reselect';

export const getItems = state => state.inventory.items;

export const getCurrentCategoryIndex = state =>
  state.inventory.currentCategoryIndex;

export const getCategories = state => state.inventory.categories;

const getItemsFromCategory = (items, category) => {
  return items.allIds.reduce((acc, itemId) => {
    if (items.byId[itemId].category === category) {
      acc.push(items.byId[itemId]);
    }
    return acc;
  }, []);
};

const getCategoryFromIndex = (categories, currentIndex) =>
  categories.find((_, index) => index === currentIndex);

export const getCurrentCategoryItems = createSelector(
  [getItems, getCurrentCategoryIndex, getCategories],
  (items, currentCategoryIndex, categories) => {
    const currentCategory = getCategoryFromIndex(
      categories,
      currentCategoryIndex
    );

    return getItemsFromCategory(items, currentCategory);
  }
);

export const getcurrentGridBoxIndex
 = state => state.inventory.currentGridBoxIndex
;
