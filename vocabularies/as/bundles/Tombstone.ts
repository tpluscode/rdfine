import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { TombstoneMixin } from '../lib/Tombstone';

export const TombstoneBundle = [
  ObjectMixin as Mixin,
  TombstoneMixin as Mixin];
