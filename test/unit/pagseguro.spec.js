'use strict'

import chai from 'chai'
import nock from 'nock'
import pagseguro from '../../src/pagseguro.js'

let expect = chai.expect

let psobject = null

describe('Pagseguro (unit)', () => {

	describe('when imported', () => {
		it('should return a Function', () => {
			expect(pagseguro).to.be.an('function')
		})
	})

	describe('when created', () => {
		it('should return an Object if config is provided', () => {
			psobject = new pagseguro({ auth: { user: 'username', password: 'somepassword'} })
			expect(psobject).to.be.an('object')
		})

		it('should return an Error if no config is provided', () => {
			try {
				new pagseguro()
			} catch (e) {
				expect(e instanceof Error).to.be.true
			}

		})

		it('should return an Error if no auth in config is present', () => {
			try {
				new pagseguro({})
			} catch (e) {
				expect(e instanceof Error).to.be.true
			}
		})

	})


	afterEach(() => {
		nock.cleanAll()
	})
})