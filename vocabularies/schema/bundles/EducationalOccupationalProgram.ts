import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { CourseMixin } from '../lib/Course';
import { DemandMixin } from '../lib/Demand';
import { DurationMixin } from '../lib/Duration';
import { EducationalOccupationalProgramMixin } from '../lib/EducationalOccupationalProgram';
import { IntangibleMixin } from '../lib/Intangible';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const EducationalOccupationalProgramBundle = [
  AlignmentObjectMixin as Mixin,
  CategoryCodeMixin as Mixin,
  CourseMixin as Mixin,
  DemandMixin as Mixin,
  DurationMixin as Mixin,
  EducationalOccupationalProgramMixin as Mixin,
  IntangibleMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  StructuredValueMixin as Mixin];
