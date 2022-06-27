import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InternetCafeMixin } from '../lib/InternetCafe';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const InternetCafeBundle = [
  InternetCafeMixin as Mixin,
  LocalBusinessMixin as Mixin];
