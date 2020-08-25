import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  CompilationAlbum: schema.CompilationAlbum as NamedNode<'http://schema.org/CompilationAlbum'>,
  DJMixAlbum: schema.DJMixAlbum as NamedNode<'http://schema.org/DJMixAlbum'>,
  DemoAlbum: schema.DemoAlbum as NamedNode<'http://schema.org/DemoAlbum'>,
  LiveAlbum: schema.LiveAlbum as NamedNode<'http://schema.org/LiveAlbum'>,
  MixtapeAlbum: schema.MixtapeAlbum as NamedNode<'http://schema.org/MixtapeAlbum'>,
  RemixAlbum: schema.RemixAlbum as NamedNode<'http://schema.org/RemixAlbum'>,
  SoundtrackAlbum: schema.SoundtrackAlbum as NamedNode<'http://schema.org/SoundtrackAlbum'>,
  SpokenWordAlbum: schema.SpokenWordAlbum as NamedNode<'http://schema.org/SpokenWordAlbum'>,
  StudioAlbum: schema.StudioAlbum as NamedNode<'http://schema.org/StudioAlbum'>,
};

export type MusicAlbumProductionType =
  NamedNode<'http://schema.org/CompilationAlbum'>
  | NamedNode<'http://schema.org/DJMixAlbum'>
  | NamedNode<'http://schema.org/DemoAlbum'>
  | NamedNode<'http://schema.org/LiveAlbum'>
  | NamedNode<'http://schema.org/MixtapeAlbum'>
  | NamedNode<'http://schema.org/RemixAlbum'>
  | NamedNode<'http://schema.org/SoundtrackAlbum'>
  | NamedNode<'http://schema.org/SpokenWordAlbum'>
  | NamedNode<'http://schema.org/StudioAlbum'>;
