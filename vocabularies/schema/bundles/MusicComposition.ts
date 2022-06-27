import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { EventMixin } from '../lib/Event';
import { MusicCompositionMixin } from '../lib/MusicComposition';
import { MusicRecordingMixin } from '../lib/MusicRecording';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const MusicCompositionBundle = [
  CreativeWorkMixin as Mixin,
  EventMixin as Mixin,
  MusicCompositionMixin as Mixin,
  MusicRecordingMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
