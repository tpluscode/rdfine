import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { RealEstateAgentMixin } from '../RealEstateAgent';

export const RealEstateAgentDependencies = [
  LocalBusinessMixin as Mixin,
  RealEstateAgentMixin as Mixin];
