import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../Container';
import { ThreadMixin } from '../Thread';

export const ThreadBundle = [
  ContainerMixin as Mixin,
  ThreadMixin as Mixin];
