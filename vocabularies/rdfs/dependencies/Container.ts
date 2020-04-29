import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { ContainerMixin } from '../Container';

export const ContainerDependencies = [
  ResourceMixin as Mixin,
  ContainerMixin as Mixin];
