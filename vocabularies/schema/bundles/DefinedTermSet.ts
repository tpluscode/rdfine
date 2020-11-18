import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DefinedTermSetMixin } from '../lib/DefinedTermSet';

export const DefinedTermSetBundle = [
  CreativeWorkMixin as Mixin,
  DefinedTermSetMixin as Mixin];
