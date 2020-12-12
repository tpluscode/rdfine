import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  CDFormat: schema.CDFormat as NamedNode<'http://schema.org/CDFormat'>,
  CassetteFormat: schema.CassetteFormat as NamedNode<'http://schema.org/CassetteFormat'>,
  DVDFormat: schema.DVDFormat as NamedNode<'http://schema.org/DVDFormat'>,
  DigitalAudioTapeFormat: schema.DigitalAudioTapeFormat as NamedNode<'http://schema.org/DigitalAudioTapeFormat'>,
  DigitalFormat: schema.DigitalFormat as NamedNode<'http://schema.org/DigitalFormat'>,
  LaserDiscFormat: schema.LaserDiscFormat as NamedNode<'http://schema.org/LaserDiscFormat'>,
  VinylFormat: schema.VinylFormat as NamedNode<'http://schema.org/VinylFormat'>,
};

export type MusicReleaseFormatType =
  NamedNode<'http://schema.org/CDFormat'>
  | NamedNode<'http://schema.org/CassetteFormat'>
  | NamedNode<'http://schema.org/DVDFormat'>
  | NamedNode<'http://schema.org/DigitalAudioTapeFormat'>
  | NamedNode<'http://schema.org/DigitalFormat'>
  | NamedNode<'http://schema.org/LaserDiscFormat'>
  | NamedNode<'http://schema.org/VinylFormat'>;
