import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseMixin } from '../lib/TestCase';
import { ActionTestCaseMixin } from '../lib/ActionTestCase';

export const ActionTestCaseBundle = [
  TestCaseMixin as Mixin,
  ActionTestCaseMixin as Mixin];
