import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { TestCaseMixin } from '../lib/TestCase';
import { ScriptTestCaseMixin } from '../lib/ScriptTestCase';

export const ScriptTestCaseBundle = [
  ScriptMixin as Mixin,
  TestCaseMixin as Mixin,
  ScriptTestCaseMixin as Mixin];
