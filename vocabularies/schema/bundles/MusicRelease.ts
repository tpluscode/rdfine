import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicReleaseMixin } from '../lib/MusicRelease';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { DurationMixin } from '../lib/Duration';
import { MusicAlbumMixin } from '../lib/MusicAlbum';

export const MusicReleaseBundle = [
  MusicPlaylistMixin as Mixin,
  MusicReleaseMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  DurationMixin as Mixin,
  MusicAlbumMixin as Mixin];
