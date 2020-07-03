import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { ReadActionMixin } from '../ReadAction';

export const ReadActionBundle = [
  ConsumeActionMixin as Mixin,
  ReadActionMixin as Mixin];
