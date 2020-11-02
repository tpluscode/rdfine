import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationalOccupationalProgramMixin } from '../EducationalOccupationalProgram';
import { WorkBasedProgramMixin } from '../WorkBasedProgram';
import { CategoryCodeMixin } from '../CategoryCode';
import { MonetaryAmountDistributionMixin } from '../MonetaryAmountDistribution';

export const WorkBasedProgramBundle = [
  EducationalOccupationalProgramMixin as Mixin,
  WorkBasedProgramMixin as Mixin,
  CategoryCodeMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin];
