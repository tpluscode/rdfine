import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { OperationMixin } from '../lib/Operation';
import { LinkMixin } from '../lib/Link';

export const LinkBundle = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  LinkMixin as Mixin];
