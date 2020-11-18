import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { ThreadMixin } from '../lib/Thread';

export const ThreadBundle = [
  ContainerMixin as Mixin,
  ThreadMixin as Mixin];
