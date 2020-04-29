import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { MusicEventMixin } from '../MusicEvent';

export const MusicEventDependencies = [
  EventMixin as Mixin,
  MusicEventMixin as Mixin];
