import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { FestivalMixin } from '../Festival';

export const FestivalDependencies = [
  EventMixin as Mixin,
  FestivalMixin as Mixin];
