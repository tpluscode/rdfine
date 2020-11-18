import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOccupationalProgramMixin } from '../lib/EducationalOccupationalProgram';
import { WorkBasedProgramMixin } from '../lib/WorkBasedProgram';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';

export const WorkBasedProgramBundle = [
  EducationalOccupationalProgramMixin as Mixin,
  WorkBasedProgramMixin as Mixin,
  CategoryCodeMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin];
