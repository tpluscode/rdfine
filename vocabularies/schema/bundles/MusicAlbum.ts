import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { MusicReleaseMixin } from '../lib/MusicRelease';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { PersonMixin } from '../lib/Person';

export const MusicAlbumBundle = [
  MusicPlaylistMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicReleaseMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin];
