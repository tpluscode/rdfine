import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ValidationTestCaseMixin } from '../lib/ValidationTestCase';
import { GraphValidationTestCaseMixin } from '../lib/GraphValidationTestCase';

export const GraphValidationTestCaseBundle = [
  ValidationTestCaseMixin as Mixin,
  GraphValidationTestCaseMixin as Mixin];
