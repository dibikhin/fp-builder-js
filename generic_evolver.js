/**
 * @module GenericEvolver
 */

'use strict'

const {
    mergeDeepRight,
} = require('ramda')

/**
 * Evolves an object by merging with diff.
 * Makes possible to call Builder's steps in any order
 *
 * @param {object} params
 * @param {object} params.before - a target object to evolve
 * @param {object} params.diff - a diff for evolving the target object
 * @returns {object} evolved object
 */
function evolve({ before, diff, }) {
    const merged = mergeDeepRight(before, diff)
    return Object.freeze(merged)
}

module.exports = {
    evolve,
}
