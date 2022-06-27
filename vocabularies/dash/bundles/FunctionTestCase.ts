import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionTestCaseMixin } from '../lib/FunctionTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const FunctionTestCaseBundle = [
  FunctionTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
