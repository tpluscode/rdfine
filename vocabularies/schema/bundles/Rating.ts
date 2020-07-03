import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { RatingMixin } from '../Rating';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const RatingBundle = [
  IntangibleMixin as Mixin,
  RatingMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
