import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ScriptTestCaseMixin } from '../lib/ScriptTestCase';
import { TestCaseMixin } from '../lib/TestCase';

export const ScriptTestCaseBundle = [
  ScriptMixin as Mixin,
  ScriptTestCaseMixin as Mixin,
  TestCaseMixin as Mixin];
