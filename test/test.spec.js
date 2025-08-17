// import { sumTo } from '../test_proj.js';
import { maxOrNull } from '../test_proj.js';
import { describe, test } from 'node:test';
import assert from 'assert';

// describe('add all number positive before come the number', () => {
//     test('add all numbers', () => {
//         assert.strictEqual(sumTo(5), 15)
//         assert.strictEqual(sumTo(1000), 500500)
//         assert.strictEqual(sumTo(-5), 0)
//         assert.strictEqual(sumTo(-50), 0)
//     })
// });

describe('check max number', () => {
    test('find max number', () => {
        assert.strictEqual(maxOrNull([1, 2, 3]), 3);
        assert.strictEqual(maxOrNull([-5, -2]), -2);
        assert.strictEqual(maxOrNull(([1, -4, 2])), 2);
        assert.strictEqual(maxOrNull(([])), null);
    })
})
