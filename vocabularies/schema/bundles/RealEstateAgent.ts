import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { RealEstateAgentMixin } from '../lib/RealEstateAgent';

export const RealEstateAgentBundle = [
  LocalBusinessMixin as Mixin,
  RealEstateAgentMixin as Mixin];
