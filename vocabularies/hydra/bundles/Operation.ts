import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StatusMixin } from '../lib/Status';
import { OperationMixin } from '../lib/Operation';
import { ClassMixin } from '../lib/Class';
import { ResourceMixin } from '../lib/Resource';
import { HeaderSpecificationMixin } from '../lib/HeaderSpecification';

export const OperationBundle = [
  StatusMixin as Mixin,
  OperationMixin as Mixin,
  ClassMixin as Mixin,
  ResourceMixin as Mixin,
  HeaderSpecificationMixin as Mixin];
