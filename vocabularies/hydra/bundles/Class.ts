import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { OperationMixin } from '../lib/Operation';
import { SupportedPropertyMixin } from '../lib/SupportedProperty';
import { ClassMixin } from '../lib/Class';

export const ClassBundle = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  SupportedPropertyMixin as Mixin,
  ClassMixin as Mixin];
