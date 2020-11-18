import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { ExhibitionEventMixin } from '../lib/ExhibitionEvent';

export const ExhibitionEventBundle = [
  EventMixin as Mixin,
  ExhibitionEventMixin as Mixin];
