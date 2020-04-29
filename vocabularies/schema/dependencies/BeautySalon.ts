import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { BeautySalonMixin } from '../BeautySalon';

export const BeautySalonDependencies = [
  HealthAndBeautyBusinessMixin as Mixin,
  BeautySalonMixin as Mixin];
