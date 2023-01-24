import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CarrierExtentMixin } from '../lib/CarrierExtent';
import { ExtentMixin } from '../lib/Extent';

export const CarrierExtentBundle = [
  CarrierExtentMixin as Mixin,
  ExtentMixin as Mixin];
