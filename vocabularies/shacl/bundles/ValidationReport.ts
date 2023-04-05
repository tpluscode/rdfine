import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ValidationReportMixin } from '../lib/ValidationReport';
import { ValidationResultMixin } from '../lib/ValidationResult';

export const ValidationReportBundle = [
  ValidationReportMixin as Mixin,
  ValidationResultMixin as Mixin];
