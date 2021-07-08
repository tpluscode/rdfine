import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { EducationalOccupationalProgramMixin } from '../lib/EducationalOccupationalProgram';
import { CourseMixin } from '../lib/Course';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { DurationMixin } from '../lib/Duration';

export const EducationalOccupationalProgramBundle = [
  IntangibleMixin as Mixin,
  EducationalOccupationalProgramMixin as Mixin,
  CourseMixin as Mixin,
  StructuredValueMixin as Mixin,
  CategoryCodeMixin as Mixin,
  OfferMixin as Mixin,
  DemandMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  DurationMixin as Mixin];
