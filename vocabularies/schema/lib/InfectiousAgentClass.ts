import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  Bacteria: schema.Bacteria as NamedNode<'http://schema.org/Bacteria'>,
  Fungus: schema.Fungus as NamedNode<'http://schema.org/Fungus'>,
  MulticellularParasite: schema.MulticellularParasite as NamedNode<'http://schema.org/MulticellularParasite'>,
  Prion: schema.Prion as NamedNode<'http://schema.org/Prion'>,
  Protozoa: schema.Protozoa as NamedNode<'http://schema.org/Protozoa'>,
  Virus: schema.Virus as NamedNode<'http://schema.org/Virus'>,
};

export type InfectiousAgentClass = 
  NamedNode<'http://schema.org/Bacteria'>
  | NamedNode<'http://schema.org/Fungus'>
  | NamedNode<'http://schema.org/MulticellularParasite'>
  | NamedNode<'http://schema.org/Prion'>
  | NamedNode<'http://schema.org/Protozoa'>
  | NamedNode<'http://schema.org/Virus'>;
