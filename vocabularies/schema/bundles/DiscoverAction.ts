import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DiscoverActionMixin } from '../lib/DiscoverAction';
import { FindActionMixin } from '../lib/FindAction';

export const DiscoverActionBundle = [
  DiscoverActionMixin as Mixin,
  FindActionMixin as Mixin];
