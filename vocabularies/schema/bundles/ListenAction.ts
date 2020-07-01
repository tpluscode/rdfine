import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { ListenActionMixin } from '../ListenAction';

export const ListenActionBundle = [
  ConsumeActionMixin as Mixin,
  ListenActionMixin as Mixin];
