import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LinkMixin } from '../lib/Link';
import { OperationMixin } from '../lib/Operation';
import { ResourceMixin } from '../lib/Resource';

export const LinkBundle = [
  LinkMixin as Mixin,
  OperationMixin as Mixin,
  ResourceMixin as Mixin];
