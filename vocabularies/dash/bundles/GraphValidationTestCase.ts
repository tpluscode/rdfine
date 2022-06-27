import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GraphValidationTestCaseMixin } from '../lib/GraphValidationTestCase';
import { ValidationTestCaseMixin } from '../lib/ValidationTestCase';

export const GraphValidationTestCaseBundle = [
  GraphValidationTestCaseMixin as Mixin,
  ValidationTestCaseMixin as Mixin];
