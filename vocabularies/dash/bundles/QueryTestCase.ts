import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { QueryTestCaseMixin } from '../lib/QueryTestCase';

export const QueryTestCaseBundle = [
  TestCaseMixin as Mixin,
  QueryTestCaseMixin as Mixin];
