/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export { GraphQLError } from './GraphQLError';
export { syntaxError } from './syntaxError';
export { locatedError } from './locatedError';
export { formatError } from './formatError';

export type {
  GraphQLFormattedError,
  GraphQLErrorLocation,
} from './formatError';
