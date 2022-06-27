import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { MusicAlbumMixin } from '../lib/MusicAlbum';
import { MusicPlaylistMixin } from '../lib/MusicPlaylist';
import { MusicReleaseMixin } from '../lib/MusicRelease';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const MusicReleaseBundle = [
  DurationMixin as Mixin,
  MusicAlbumMixin as Mixin,
  MusicPlaylistMixin as Mixin,
  MusicReleaseMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
