import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { InternetCafeMixin } from '../InternetCafe';

export const InternetCafeBundle = [
  LocalBusinessMixin as Mixin,
  InternetCafeMixin as Mixin];
