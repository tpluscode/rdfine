import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../lib/Class';
import { HeaderSpecificationMixin } from '../lib/HeaderSpecification';
import { OperationMixin } from '../lib/Operation';
import { ResourceMixin } from '../lib/Resource';
import { StatusMixin } from '../lib/Status';

export const OperationBundle = [
  ClassMixin as Mixin,
  HeaderSpecificationMixin as Mixin,
  OperationMixin as Mixin,
  ResourceMixin as Mixin,
  StatusMixin as Mixin];
