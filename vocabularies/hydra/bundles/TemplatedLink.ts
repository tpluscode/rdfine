import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { OperationMixin } from '../lib/Operation';
import { TemplatedLinkMixin } from '../lib/TemplatedLink';

export const TemplatedLinkBundle = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  TemplatedLinkMixin as Mixin];
