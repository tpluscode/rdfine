import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MusicCompositionMixin } from '../lib/MusicComposition';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { EventMixin } from '../lib/Event';
import { MusicRecordingMixin } from '../lib/MusicRecording';

export const MusicCompositionBundle = [
  CreativeWorkMixin as Mixin,
  MusicCompositionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  EventMixin as Mixin,
  MusicRecordingMixin as Mixin];
