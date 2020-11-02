import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { DefinedTermSetMixin } from '../DefinedTermSet';

export const DefinedTermSetBundle = [
  CreativeWorkMixin as Mixin,
  DefinedTermSetMixin as Mixin];
