import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { RatingMixin } from '../lib/Rating';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const RatingBundle = [
  IntangibleMixin as Mixin,
  RatingMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
