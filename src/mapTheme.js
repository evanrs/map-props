import _ from 'lodash';
import { flatMapObject } from './flatMapObject';
import { onProp } from './index.js';

export const mapTheme = map => {
  if (_.isFunction(map)) {
    map = map();
  }

  map = _.map(flatMapObject(map), (mapValue, prop) => {
    const fn = onProp(prop, mapValue);
    return ({ theme }) => fn(theme);
  });

  return props => map.map(select => select(props));
};
