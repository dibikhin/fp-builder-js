/**
 * @module MessageBuilder
 */

'use strict'

const {
    evolve,
} = require('./generic_evolver')

// For consistency
const emptyMessage = Object.freeze({})
const build = Object.freeze

/**
 * Extensions
 */

const withTitle = (params) => (x) => evolve({
    before: x,
    diff: makeNotification({ params, }),
})
const withBody = (params) => (x) => evolve({
    before: x,
    diff: makeNotification({ params, }),
})
const withPriority = (params) => (x) => evolve({
    before: x,
    diff: makeSettings({ params, }),
})
const withImageUrl = (params) => (x) => evolve({
    before: x,
    diff: makeImageUrl({ params, }),
})
const withImageResolution = (params) => (x) => evolve({
    before: x,
    diff: makeImageResolution({ params, }),
})

/**
 * Sub-factories
 */

function makeNotification({ params, }) {
    return Object.freeze({
        notification: {
            ...params,
        },
    })
}

function makeSettings({ params, }) {
    return Object.freeze({
        settings: {
            ...params,
        },
    })
}

function makeImageUrl({ params, }) {
    return Object.freeze({
        settings: {
            image: {
                ...params,
            },
        },
        ios: {
            specific_url_param: params.url,
        },
        android: {
            another_specific_param: params.url,
        },
    })
}

function makeImageResolution({ params, }) {
    return Object.freeze({
        settings: {
            image: {
                ...params,
            },
        },
    })
}

module.exports = {
    emptyMessage,
    withTitle,
    withBody,
    withPriority,
    withImageUrl,
    withImageResolution,
    build,
}
