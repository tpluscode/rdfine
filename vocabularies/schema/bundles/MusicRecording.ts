import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { MusicCompositionMixin } from '../lib/MusicComposition';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicRecordingMixin } from '../lib/MusicRecording';
import { PersonMixin } from '../lib/Person';

export const MusicRecordingBundle = [
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicCompositionMixin as Mixin,
  MusicGroupMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  MusicRecordingMixin as Mixin,
  PersonMixin as Mixin];
