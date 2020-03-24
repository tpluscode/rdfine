import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type MusicAlbumProductionType = NamedNode;

export default {
  CompilationAlbum: schema.CompilationAlbum,
  DJMixAlbum: schema.DJMixAlbum,
  DemoAlbum: schema.DemoAlbum,
  LiveAlbum: schema.LiveAlbum,
  MixtapeAlbum: schema.MixtapeAlbum,
  RemixAlbum: schema.RemixAlbum,
  SoundtrackAlbum: schema.SoundtrackAlbum,
  SpokenWordAlbum: schema.SpokenWordAlbum,
  StudioAlbum: schema.StudioAlbum,
};
