import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { FunctionTestCaseMixin } from '../lib/FunctionTestCase';

export const FunctionTestCaseBundle = [
  TestCaseMixin as Mixin,
  FunctionTestCaseMixin as Mixin];
