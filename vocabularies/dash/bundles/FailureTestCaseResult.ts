import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TestCaseResultMixin } from '../lib/TestCaseResult';
import { FailureTestCaseResultMixin } from '../lib/FailureTestCaseResult';

export const FailureTestCaseResultBundle = [
  TestCaseResultMixin as Mixin,
  FailureTestCaseResultMixin as Mixin];
