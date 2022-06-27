import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OperationMixin } from '../lib/Operation';
import { ResourceMixin } from '../lib/Resource';
import { TemplatedLinkMixin } from '../lib/TemplatedLink';

export const TemplatedLinkBundle = [
  OperationMixin as Mixin,
  ResourceMixin as Mixin,
  TemplatedLinkMixin as Mixin];
