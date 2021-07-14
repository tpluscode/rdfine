import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  AlbumRelease: schema.AlbumRelease,
  BroadcastRelease: schema.BroadcastRelease,
  EPRelease: schema.EPRelease,
  SingleRelease: schema.SingleRelease,
};

export type MusicAlbumReleaseType = typeof values[keyof typeof values];

export default values;
