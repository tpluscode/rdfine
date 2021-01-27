import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContributorMixin } from '../lib/Contributor';
import { CreatorMixin } from '../lib/Creator';

export const CreatorBundle = [
  ContributorMixin as Mixin,
  CreatorMixin as Mixin];
