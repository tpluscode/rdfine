import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { JSTestCaseMixin } from '../lib/JSTestCase';

export const JSTestCaseBundle = [
  TestCaseMixin as Mixin,
  JSTestCaseMixin as Mixin];
