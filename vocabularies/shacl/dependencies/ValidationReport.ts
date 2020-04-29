import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ValidationResultMixin } from '../ValidationResult';
import { ValidationReportMixin } from '../ValidationReport';

export const ValidationReportDependencies = [
  ValidationResultMixin as Mixin,
  ValidationReportMixin as Mixin];
