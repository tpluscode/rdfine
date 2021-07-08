import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OperationMixin } from '../lib/Operation';
import { SupportedPropertyMixin } from '../lib/SupportedProperty';

export const SupportedPropertyBundle = [
  OperationMixin as Mixin,
  SupportedPropertyMixin as Mixin];
