import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { StoreMixin } from '../Store';

export const StoreBundle = [
  LocalBusinessMixin as Mixin,
  StoreMixin as Mixin];
