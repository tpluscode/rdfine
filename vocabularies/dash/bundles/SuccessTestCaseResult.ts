import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseResultMixin } from '../lib/TestCaseResult';
import { SuccessTestCaseResultMixin } from '../lib/SuccessTestCaseResult';

export const SuccessTestCaseResultBundle = [
  TestCaseResultMixin as Mixin,
  SuccessTestCaseResultMixin as Mixin];
