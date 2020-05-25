/**
 * Builder pattern specs
 */

'use strict'

const chai = require('chai')
chai.should()

const {
  pipe,
} = require('ramda')

const {
  emptyMessage,
  withTitle,
  withBody,
  withPriority,
  withImageUrl,
  withImageResolution,
  build,
} = require('./messageBuilder')

const expectedMessage = require('./expectedMessage')

describe('FP Builder pattern', function () {
  it('should build complex objects', function () {

    const message = pipe(
      withTitle({
        title: 'test title',
      }),
      withBody({
        body: 'test body',
      }),
      withPriority({
        priority: 'high',
      }),
      withImageUrl({
        url: '1.jpg',
      }),
      withImageResolution({
        resolution: '1080p',
      }),
      build,
    )(emptyMessage)

    message.should.be.deep.equal(expectedMessage)
  })
})
