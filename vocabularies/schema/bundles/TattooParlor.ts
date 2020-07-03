import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { TattooParlorMixin } from '../TattooParlor';

export const TattooParlorBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  TattooParlorMixin as Mixin];
