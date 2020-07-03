import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MusicPlaylistMixin } from '../MusicPlaylist';
import { MusicReleaseMixin } from '../MusicRelease';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { DurationMixin } from '../Duration';
import { MusicAlbumMixin } from '../MusicAlbum';

export const MusicReleaseBundle = [
  MusicPlaylistMixin as Mixin,
  MusicReleaseMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  DurationMixin as Mixin,
  MusicAlbumMixin as Mixin];
