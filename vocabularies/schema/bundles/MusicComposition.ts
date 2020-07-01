import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MusicCompositionMixin } from '../MusicComposition';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { EventMixin } from '../Event';
import { MusicRecordingMixin } from '../MusicRecording';

export const MusicCompositionBundle = [
  CreativeWorkMixin as Mixin,
  MusicCompositionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  EventMixin as Mixin,
  MusicRecordingMixin as Mixin];
