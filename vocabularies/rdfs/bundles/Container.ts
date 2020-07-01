import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { ContainerMixin } from '../Container';

export const ContainerBundle = [
  ResourceMixin as Mixin,
  ContainerMixin as Mixin];
