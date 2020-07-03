import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { ExhibitionEventMixin } from '../ExhibitionEvent';

export const ExhibitionEventBundle = [
  EventMixin as Mixin,
  ExhibitionEventMixin as Mixin];
