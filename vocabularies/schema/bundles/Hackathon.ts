import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { HackathonMixin } from '../lib/Hackathon';

export const HackathonBundle = [
  EventMixin as Mixin,
  HackathonMixin as Mixin];
