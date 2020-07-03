import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../FindAction';
import { DiscoverActionMixin } from '../DiscoverAction';

export const DiscoverActionBundle = [
  FindActionMixin as Mixin,
  DiscoverActionMixin as Mixin];
