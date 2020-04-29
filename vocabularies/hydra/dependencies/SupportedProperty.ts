import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { SupportedPropertyMixin } from '../SupportedProperty';

export const SupportedPropertyDependencies = [
  ResourceMixin as Mixin,
  SupportedPropertyMixin as Mixin];
