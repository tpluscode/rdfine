import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewspaperMixin } from '../lib/Newspaper';
import { PeriodicalMixin } from '../lib/Periodical';

export const NewspaperBundle = [
  NewspaperMixin as Mixin,
  PeriodicalMixin as Mixin];
