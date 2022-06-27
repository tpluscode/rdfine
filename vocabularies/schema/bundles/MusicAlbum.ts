import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicReleaseMixin } from '../lib/MusicRelease';
import { PersonMixin } from '../lib/Person';

export const MusicAlbumBundle = [
  MusicAlbumMixin as Mixin,
  MusicGroupMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  MusicReleaseMixin as Mixin,
  PersonMixin as Mixin];
