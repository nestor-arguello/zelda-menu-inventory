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

export const getCurrentCategory = createSelector(
  [getCategories, getCurrentCategoryIndex],
  (categories, currentCategoryIndex) => {
    return getCategoryFromIndex(categories, currentCategoryIndex);
  }
);

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

export const getCurrentGridBoxIndex = state =>
  state.inventory.currentGridBoxIndex;

export const getCurrentItem = createSelector(
  [getCurrentCategoryItems, getCurrentGridBoxIndex],
  (categoryItems, gridBoxIndex) => {
    if (!categoryItems[gridBoxIndex]) return null;

    return categoryItems[gridBoxIndex];
  }
);

export const getIsItemSelected = state => state.inventory.isItemSelected;