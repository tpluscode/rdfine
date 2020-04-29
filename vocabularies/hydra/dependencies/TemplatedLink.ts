import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { OperationMixin } from '../Operation';
import { TemplatedLinkMixin } from '../TemplatedLink';

export const TemplatedLinkDependencies = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  TemplatedLinkMixin as Mixin];
