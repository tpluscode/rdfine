import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { MusicEventMixin } from '../lib/MusicEvent';

export const MusicEventBundle = [
  EventMixin as Mixin,
  MusicEventMixin as Mixin];
