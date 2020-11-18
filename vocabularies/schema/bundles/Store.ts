import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { StoreMixin } from '../lib/Store';

export const StoreBundle = [
  LocalBusinessMixin as Mixin,
  StoreMixin as Mixin];
