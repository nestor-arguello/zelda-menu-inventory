import React from 'react';

import { ReactComponent as NewItem } from './new-item.svg';
import { ReactComponent as Climibing } from './climbing.svg';
import { ReactComponent as ResistFire } from './resist-fire.svg';
import { ReactComponent as Swimming } from './swimming.svg';
import { ReactComponent as Sword } from './sword.svg';
import { ReactComponent as Shield } from './shield.svg';
import { ReactComponent as Armor } from './armor.svg';

export const bonusIcons = {
  climbing: <Climibing />,
  resistFire: <ResistFire />,
  swimming: <Swimming />,
};

export const NewItemIcon = NewItem;

export const categoriesIcons = {
  weapons: <Sword />,
  shields: <Shield />,
  armor: <Armor />,
};
