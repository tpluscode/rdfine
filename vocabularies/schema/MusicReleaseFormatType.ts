import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type MusicReleaseFormatType = NamedNode;

export default {
  CDFormat: schema.CDFormat,
  CassetteFormat: schema.CassetteFormat,
  DVDFormat: schema.DVDFormat,
  DigitalAudioTapeFormat: schema.DigitalAudioTapeFormat,
  DigitalFormat: schema.DigitalFormat,
  LaserDiscFormat: schema.LaserDiscFormat,
  VinylFormat: schema.VinylFormat,
};
