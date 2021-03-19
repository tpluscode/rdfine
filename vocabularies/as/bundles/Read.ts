import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ReadMixin } from '../lib/Read';

export const ReadBundle = [
  ActivityMixin as Mixin,
  ReadMixin as Mixin];
