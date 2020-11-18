import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { ListenActionMixin } from '../lib/ListenAction';

export const ListenActionBundle = [
  ConsumeActionMixin as Mixin,
  ListenActionMixin as Mixin];
