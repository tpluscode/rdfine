import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ValidationResultMixin } from '../lib/ValidationResult';
import { ValidationReportMixin } from '../lib/ValidationReport';

export const ValidationReportBundle = [
  ValidationResultMixin as Mixin,
  ValidationReportMixin as Mixin];
