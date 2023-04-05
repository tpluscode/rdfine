import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ItemListMixin } from '../lib/ItemList';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicRecordingMixin } from '../lib/MusicRecording';

export const MusicPlaylistBundle = [
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  MusicRecordingMixin as Mixin];
