import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { StatusMixin } from '../Status';

export const StatusBundle = [
  ResourceMixin as Mixin,
  StatusMixin as Mixin];
