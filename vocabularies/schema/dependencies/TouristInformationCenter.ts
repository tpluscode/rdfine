import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { TouristInformationCenterMixin } from '../TouristInformationCenter';

export const TouristInformationCenterDependencies = [
  LocalBusinessMixin as Mixin,
  TouristInformationCenterMixin as Mixin];
