import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CarrierTypeMixin } from '../lib/CarrierType';
import { InstantiationMixin } from '../lib/Instantiation';
import { TypeMixin } from '../lib/Type';

export const CarrierTypeBundle = [
  CarrierTypeMixin as Mixin,
  InstantiationMixin as Mixin,
  TypeMixin as Mixin];
