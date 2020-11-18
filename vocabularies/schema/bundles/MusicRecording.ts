import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MusicRecordingMixin } from '../lib/MusicRecording';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { PersonMixin } from '../lib/Person';
import { DurationMixin } from '../lib/Duration';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicCompositionMixin } from '../lib/MusicComposition';

export const MusicRecordingBundle = [
  CreativeWorkMixin as Mixin,
  MusicRecordingMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin,
  DurationMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  MusicCompositionMixin as Mixin];
