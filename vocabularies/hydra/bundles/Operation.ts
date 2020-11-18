import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { StatusMixin } from '../lib/Status';
import { OperationMixin } from '../lib/Operation';
import { ClassMixin } from '../lib/Class';

export const OperationBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin,
  OperationMixin as Mixin,
  ClassMixin as Mixin];
