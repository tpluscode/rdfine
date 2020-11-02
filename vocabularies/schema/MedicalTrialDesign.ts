import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  DoubleBlindedTrial: schema.DoubleBlindedTrial as NamedNode<'http://schema.org/DoubleBlindedTrial'>,
  InternationalTrial: schema.InternationalTrial as NamedNode<'http://schema.org/InternationalTrial'>,
  MultiCenterTrial: schema.MultiCenterTrial as NamedNode<'http://schema.org/MultiCenterTrial'>,
  OpenTrial: schema.OpenTrial as NamedNode<'http://schema.org/OpenTrial'>,
  PlaceboControlledTrial: schema.PlaceboControlledTrial as NamedNode<'http://schema.org/PlaceboControlledTrial'>,
  RandomizedTrial: schema.RandomizedTrial as NamedNode<'http://schema.org/RandomizedTrial'>,
  SingleBlindedTrial: schema.SingleBlindedTrial as NamedNode<'http://schema.org/SingleBlindedTrial'>,
  SingleCenterTrial: schema.SingleCenterTrial as NamedNode<'http://schema.org/SingleCenterTrial'>,
  TripleBlindedTrial: schema.TripleBlindedTrial as NamedNode<'http://schema.org/TripleBlindedTrial'>,
};

export type MedicalTrialDesign =
  NamedNode<'http://schema.org/DoubleBlindedTrial'>
  | NamedNode<'http://schema.org/InternationalTrial'>
  | NamedNode<'http://schema.org/MultiCenterTrial'>
  | NamedNode<'http://schema.org/OpenTrial'>
  | NamedNode<'http://schema.org/PlaceboControlledTrial'>
  | NamedNode<'http://schema.org/RandomizedTrial'>
  | NamedNode<'http://schema.org/SingleBlindedTrial'>
  | NamedNode<'http://schema.org/SingleCenterTrial'>
  | NamedNode<'http://schema.org/TripleBlindedTrial'>;
