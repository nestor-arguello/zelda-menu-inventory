export const getShields = state => {
  const { items } = state;

  return items.allIds.reduce((acc, itemId) => {
    if (items.byId[itemId].type === 'shield') {
      acc.push(items.byId[itemId]);
    }
    return acc;
  }, []);
};
