import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { OperationMixin } from '../Operation';
import { SupportedPropertyMixin } from '../SupportedProperty';

export const SupportedPropertyBundle = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  SupportedPropertyMixin as Mixin];
