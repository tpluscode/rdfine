import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { HackathonMixin } from '../Hackathon';

export const HackathonBundle = [
  EventMixin as Mixin,
  HackathonMixin as Mixin];
