import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { TattooParlorMixin } from '../lib/TattooParlor';

export const TattooParlorBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  TattooParlorMixin as Mixin];
