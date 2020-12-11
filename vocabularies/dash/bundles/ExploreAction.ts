import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceActionMixin } from '../lib/ResourceAction';
import { ExploreActionMixin } from '../lib/ExploreAction';

export const ExploreActionBundle = [
  ResourceActionMixin as Mixin,
  ExploreActionMixin as Mixin];
