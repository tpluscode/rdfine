import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { ResourceMixin } from '../lib/Resource';

export const ContainerBundle = [
  ContainerMixin as Mixin,
  ResourceMixin as Mixin];
