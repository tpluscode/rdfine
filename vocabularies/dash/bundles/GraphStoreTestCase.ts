import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { GraphStoreTestCaseMixin } from '../lib/GraphStoreTestCase';

export const GraphStoreTestCaseBundle = [
  TestCaseMixin as Mixin,
  GraphStoreTestCaseMixin as Mixin];
