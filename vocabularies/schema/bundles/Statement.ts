import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { StatementMixin } from '../lib/Statement';

export const StatementBundle = [
  CreativeWorkMixin as Mixin,
  StatementMixin as Mixin];
