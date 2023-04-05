import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { EducationalOccupationalProgramMixin } from '../lib/EducationalOccupationalProgram';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { WorkBasedProgramMixin } from '../lib/WorkBasedProgram';

export const WorkBasedProgramBundle = [
  CategoryCodeMixin as Mixin,
  EducationalOccupationalProgramMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  WorkBasedProgramMixin as Mixin];
