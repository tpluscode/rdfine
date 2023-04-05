import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BlockMixin } from '../lib/Block';
import { IgnoreMixin } from '../lib/Ignore';

export const BlockBundle = [
  BlockMixin as Mixin,
  IgnoreMixin as Mixin];
