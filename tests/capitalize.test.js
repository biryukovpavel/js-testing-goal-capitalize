import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.deepEqual(capitalize('hello'), 'Hello');

assert.deepEqual(capitalize(''), '');
