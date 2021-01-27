import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ContributeMixin } from '../lib/Contribute';

export const ContributeBundle = [
  ActivityMixin as Mixin,
  ContributeMixin as Mixin];
