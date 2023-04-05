import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSTestCaseMixin } from '../lib/JSTestCase.js';
import { TestCaseMixin } from '../lib/TestCase.js';

export const JSTestCaseBundle = [
  JSTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
