import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { ContainerMixin } from '../lib/Container';

export const ContainerBundle = [
  ResourceMixin as Mixin,
  ContainerMixin as Mixin];
