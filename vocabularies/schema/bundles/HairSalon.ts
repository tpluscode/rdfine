import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { HairSalonMixin } from '../HairSalon';

export const HairSalonBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  HairSalonMixin as Mixin];
