import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MusicPlaylistMixin } from '../MusicPlaylist';
import { MusicAlbumMixin } from '../MusicAlbum';
import { MusicReleaseMixin } from '../MusicRelease';
import { MusicGroupMixin } from '../MusicGroup';
import { PersonMixin } from '../Person';

export const MusicAlbumBundle = [
  MusicPlaylistMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicReleaseMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin];
