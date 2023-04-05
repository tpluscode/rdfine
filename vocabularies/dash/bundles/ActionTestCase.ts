import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionTestCaseMixin } from '../lib/ActionTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const ActionTestCaseBundle = [
  ActionTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
