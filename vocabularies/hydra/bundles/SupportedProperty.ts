import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { OperationMixin } from '../lib/Operation';
import { SupportedPropertyMixin } from '../lib/SupportedProperty';

export const SupportedPropertyBundle = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  SupportedPropertyMixin as Mixin];
