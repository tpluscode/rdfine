import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QueryTestCaseMixin } from '../lib/QueryTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const QueryTestCaseBundle = [
  QueryTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
