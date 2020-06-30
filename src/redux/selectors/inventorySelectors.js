import { createSelector } from 'reselect';

export const getItems = state => state.inventory.items;

export const getCurrentCategoryIndex = state => state.inventory.currentCategoryIndex;

export const getCategories = state => state.inventory.categories;

export const getItemsFromCategory = (items, category) => {
  return items.allIds.reduce((acc, itemId) => {
    if (items.byId[itemId].category === category) {
      acc.push(items.byId[itemId]);
    }
    return acc;
  }, []);
};

export const getCurrentCategoryItems = createSelector(
  [getItems, getCurrentCategoryIndex, getCategories],
  (items, currentCategoryIndex, categories) => {
    const currentCategory = categories.find(
      (_, categoryIndex) => categoryIndex === currentCategoryIndex
    );

    return getItemsFromCategory(items, currentCategory);
  }
);
