import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  AlbumRelease: schema.AlbumRelease as NamedNode<'http://schema.org/AlbumRelease'>,
  BroadcastRelease: schema.BroadcastRelease as NamedNode<'http://schema.org/BroadcastRelease'>,
  EPRelease: schema.EPRelease as NamedNode<'http://schema.org/EPRelease'>,
  SingleRelease: schema.SingleRelease as NamedNode<'http://schema.org/SingleRelease'>,
};

export type MusicAlbumReleaseType =
  NamedNode<'http://schema.org/AlbumRelease'>
  | NamedNode<'http://schema.org/BroadcastRelease'>
  | NamedNode<'http://schema.org/EPRelease'>
  | NamedNode<'http://schema.org/SingleRelease'>;
