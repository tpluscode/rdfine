import { Debugger } from 'debug'
import { Context } from '../../lib'

export const fakeLog = (): Context['log'] => ({
  debug: jest.fn<Debugger, any>(),
  warn: jest.fn<Debugger, any>(),
  error: jest.fn<Debugger, any>(),
} as any)
