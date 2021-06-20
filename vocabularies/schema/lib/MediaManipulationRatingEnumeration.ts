import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  AuthenticContent: schema.AuthenticContent as NamedNode<'http://schema.org/AuthenticContent'>,
  MissingContext: schema.MissingContext as NamedNode<'http://schema.org/MissingContext'>,
};

export type MediaManipulationRatingEnumeration =
  NamedNode<'http://schema.org/AuthenticContent'>
  | NamedNode<'http://schema.org/MissingContext'>;
