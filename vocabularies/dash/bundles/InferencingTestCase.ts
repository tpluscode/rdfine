import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InferencingTestCaseMixin } from '../lib/InferencingTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const InferencingTestCaseBundle = [
  InferencingTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
