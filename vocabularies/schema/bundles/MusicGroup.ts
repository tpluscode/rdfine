import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformingGroupMixin } from '../lib/PerformingGroup';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { PersonMixin } from '../lib/Person';
import { ItemListMixin } from '../lib/ItemList';
import { MusicRecordingMixin } from '../lib/MusicRecording';

export const MusicGroupBundle = [
  PerformingGroupMixin as Mixin,
  MusicGroupMixin as Mixin,
  MusicAlbumMixin as Mixin,
  PersonMixin as Mixin,
  ItemListMixin as Mixin,
  MusicRecordingMixin as Mixin];
