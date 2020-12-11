import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { ValidationTestCaseMixin } from '../lib/ValidationTestCase';

export const ValidationTestCaseBundle = [
  TestCaseMixin as Mixin,
  ValidationTestCaseMixin as Mixin];
