import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { StatusMixin } from '../Status';
import { OperationMixin } from '../Operation';
import { ClassMixin } from '../Class';

export const OperationBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin,
  OperationMixin as Mixin,
  ClassMixin as Mixin];
