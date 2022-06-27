import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExploreActionMixin } from '../lib/ExploreAction';
import { ResourceActionMixin } from '../lib/ResourceAction';

export const ExploreActionBundle = [
  ExploreActionMixin as Mixin,
  ResourceActionMixin as Mixin];
