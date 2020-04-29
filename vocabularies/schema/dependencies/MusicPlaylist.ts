import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MusicPlaylistMixin } from '../MusicPlaylist';
import { ItemListMixin } from '../ItemList';
import { MusicRecordingMixin } from '../MusicRecording';

export const MusicPlaylistDependencies = [
  CreativeWorkMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  ItemListMixin as Mixin,
  MusicRecordingMixin as Mixin];
