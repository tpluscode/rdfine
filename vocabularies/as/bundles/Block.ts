import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IgnoreMixin } from '../lib/Ignore';
import { BlockMixin } from '../lib/Block';

export const BlockBundle = [
  IgnoreMixin as Mixin,
  BlockMixin as Mixin];
