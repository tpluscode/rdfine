import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ListenMixin } from '../lib/Listen';

export const ListenBundle = [
  ActivityMixin as Mixin,
  ListenMixin as Mixin];
