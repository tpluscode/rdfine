import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SuccessTestCaseResultMixin } from '../lib/SuccessTestCaseResult';
import { TestCaseResultMixin } from '../lib/TestCaseResult';

export const SuccessTestCaseResultBundle = [
  SuccessTestCaseResultMixin as Mixin,
  TestCaseResultMixin as Mixin];
