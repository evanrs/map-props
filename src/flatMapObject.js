/**
 * Copied from https://gist.github.com/evanrs/b1986bb0b6f3ddd02c47e1aeb5a46f6a
 */
import {
  flatMap,
  keys,
  get,
  identity,
  isArray,
  isDate,
  isFunction,
  isObject,
  map,
  zipObject,
} from 'lodash';

/**
 * Returns paths of an object such that { a: { b: { c: [1, 2, 3] } } }
 * becomes ['a.b.c']
 */
export const flatMapPaths = (obj, iteratee = identity, path = []) =>
  flatMap(keys(obj), (key, val) => {
    val = get(obj, key);
    key = [...path, key];

    return !isObject(val) || isArray(val) || isFunction(val) || isDate(val)
      ? iteratee(key.join('.'), val)
      : flatMapPaths(val, iteratee, key);
  });

/**
 * Returns values given by flatMapPaths as an array
 */
export const flatMapValues = (
  obj,
  iteratee = identity,
  paths = flatMapPaths(obj)
) => map(paths, key => iteratee(get(obj, key), key));

/**
 * Flattens nested objects such that { a: { b: { c: [1, 2, 3] } } }
 * becomes { 'a.b.c': [1, 2, 3] }
 */
export const flatMapObject = (
  obj,
  iterateeV = identity,
  iterateeK = identity,
  paths = flatMapPaths(obj, iterateeK)
) => zipObject(paths, flatMapValues(obj, iterateeV, paths));
