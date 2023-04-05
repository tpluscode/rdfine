import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSTestCaseMixin } from '../lib/JSTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const JSTestCaseBundle = [
  JSTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
