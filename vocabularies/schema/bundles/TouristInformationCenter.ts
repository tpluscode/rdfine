import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { TouristInformationCenterMixin } from '../TouristInformationCenter';

export const TouristInformationCenterBundle = [
  LocalBusinessMixin as Mixin,
  TouristInformationCenterMixin as Mixin];
