import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { OperationMixin } from '../Operation';
import { LinkMixin } from '../Link';

export const LinkBundle = [
  ResourceMixin as Mixin,
  OperationMixin as Mixin,
  LinkMixin as Mixin];
