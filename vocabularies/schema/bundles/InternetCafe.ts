import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { InternetCafeMixin } from '../lib/InternetCafe';

export const InternetCafeBundle = [
  LocalBusinessMixin as Mixin,
  InternetCafeMixin as Mixin];
