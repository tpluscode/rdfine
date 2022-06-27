import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FailureTestCaseResultMixin } from '../lib/FailureTestCaseResult';
import { TestCaseResultMixin } from '../lib/TestCaseResult';

export const FailureTestCaseResultBundle = [
  FailureTestCaseResultMixin as Mixin,
  TestCaseResultMixin as Mixin];
