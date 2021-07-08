import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  DecontextualizedContent: schema.DecontextualizedContent as NamedNode<'http://schema.org/DecontextualizedContent'>,
  EditedOrCroppedContent: schema.EditedOrCroppedContent as NamedNode<'http://schema.org/EditedOrCroppedContent'>,
  OriginalMediaContent: schema.OriginalMediaContent as NamedNode<'http://schema.org/OriginalMediaContent'>,
  SatireOrParodyContent: schema.SatireOrParodyContent as NamedNode<'http://schema.org/SatireOrParodyContent'>,
  StagedContent: schema.StagedContent as NamedNode<'http://schema.org/StagedContent'>,
  TransformedContent: schema.TransformedContent as NamedNode<'http://schema.org/TransformedContent'>,
};

export type MediaManipulationRatingEnumeration =
  NamedNode<'http://schema.org/DecontextualizedContent'>
  | NamedNode<'http://schema.org/EditedOrCroppedContent'>
  | NamedNode<'http://schema.org/OriginalMediaContent'>
  | NamedNode<'http://schema.org/SatireOrParodyContent'>
  | NamedNode<'http://schema.org/StagedContent'>
  | NamedNode<'http://schema.org/TransformedContent'>;
