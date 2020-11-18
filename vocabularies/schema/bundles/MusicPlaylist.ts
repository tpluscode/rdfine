import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { ItemListMixin } from '../lib/ItemList';
import { MusicRecordingMixin } from '../lib/MusicRecording';

export const MusicPlaylistBundle = [
  CreativeWorkMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  ItemListMixin as Mixin,
  MusicRecordingMixin as Mixin];
