import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GraphStoreTestCaseMixin } from '../lib/GraphStoreTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const GraphStoreTestCaseBundle = [
  GraphStoreTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
