import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { EducationalOccupationalProgramMixin } from '../lib/EducationalOccupationalProgram';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { DemandMixin } from '../lib/Demand';
import { OfferMixin } from '../lib/Offer';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { CourseMixin } from '../lib/Course';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { DurationMixin } from '../lib/Duration';

export const EducationalOccupationalProgramBundle = [
  IntangibleMixin as Mixin,
  EducationalOccupationalProgramMixin as Mixin,
  StructuredValueMixin as Mixin,
  CategoryCodeMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  CourseMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  DurationMixin as Mixin];
