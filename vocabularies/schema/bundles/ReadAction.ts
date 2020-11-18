import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { ReadActionMixin } from '../lib/ReadAction';

export const ReadActionBundle = [
  ConsumeActionMixin as Mixin,
  ReadActionMixin as Mixin];
