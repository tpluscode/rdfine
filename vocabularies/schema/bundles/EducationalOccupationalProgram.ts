import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { EducationalOccupationalProgramMixin } from '../EducationalOccupationalProgram';
import { StructuredValueMixin } from '../StructuredValue';
import { CategoryCodeMixin } from '../CategoryCode';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';
import { AlignmentObjectMixin } from '../AlignmentObject';
import { CourseMixin } from '../Course';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { MonetaryAmountDistributionMixin } from '../MonetaryAmountDistribution';
import { DurationMixin } from '../Duration';

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
