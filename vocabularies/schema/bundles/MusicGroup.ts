import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../PerformingGroup';
import { MusicGroupMixin } from '../MusicGroup';
import { MusicAlbumMixin } from '../MusicAlbum';
import { PersonMixin } from '../Person';
import { ItemListMixin } from '../ItemList';
import { MusicRecordingMixin } from '../MusicRecording';

export const MusicGroupBundle = [
  PerformingGroupMixin as Mixin,
  MusicGroupMixin as Mixin,
  MusicAlbumMixin as Mixin,
  PersonMixin as Mixin,
  ItemListMixin as Mixin,
  MusicRecordingMixin as Mixin];
