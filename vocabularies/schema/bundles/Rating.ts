import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { RatingMixin } from '../lib/Rating';

export const RatingBundle = [
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  RatingMixin as Mixin];
