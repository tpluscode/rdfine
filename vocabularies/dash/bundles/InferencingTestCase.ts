import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { InferencingTestCaseMixin } from '../lib/InferencingTestCase';

export const InferencingTestCaseBundle = [
  TestCaseMixin as Mixin,
  InferencingTestCaseMixin as Mixin];
