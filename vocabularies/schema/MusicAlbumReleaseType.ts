import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type MusicAlbumReleaseType = NamedNode;

export default {
  AlbumRelease: schema.AlbumRelease,
  BroadcastRelease: schema.BroadcastRelease,
  EPRelease: schema.EPRelease,
  SingleRelease: schema.SingleRelease,
};
