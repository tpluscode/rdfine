import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { StatusMixin } from '../lib/Status';

export const StatusBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin];
