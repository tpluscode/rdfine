import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MusicRecordingMixin } from '../MusicRecording';
import { MusicGroupMixin } from '../MusicGroup';
import { PersonMixin } from '../Person';
import { DurationMixin } from '../Duration';
import { MusicAlbumMixin } from '../MusicAlbum';
import { MusicPlaylistMixin } from '../MusicPlaylist';
import { MusicCompositionMixin } from '../MusicComposition';

export const MusicRecordingBundle = [
  CreativeWorkMixin as Mixin,
  MusicRecordingMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin,
  DurationMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  MusicCompositionMixin as Mixin];
