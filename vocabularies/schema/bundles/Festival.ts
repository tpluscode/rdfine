import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { FestivalMixin } from '../lib/Festival';

export const FestivalBundle = [
  EventMixin as Mixin,
  FestivalMixin as Mixin];
