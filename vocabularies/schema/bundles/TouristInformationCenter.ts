import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { TouristInformationCenterMixin } from '../lib/TouristInformationCenter';

export const TouristInformationCenterBundle = [
  LocalBusinessMixin as Mixin,
  TouristInformationCenterMixin as Mixin];
