import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemListMixin } from '../lib/ItemList';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { MusicRecordingMixin } from '../lib/MusicRecording';
import { PerformingGroupMixin } from '../lib/PerformingGroup';
import { PersonMixin } from '../lib/Person';

export const MusicGroupBundle = [
  ItemListMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicGroupMixin as Mixin,
  MusicRecordingMixin as Mixin,
  PerformingGroupMixin as Mixin,
  PersonMixin as Mixin];
