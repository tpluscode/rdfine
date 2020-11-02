import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  AuthoritativeLegalValue: schema.AuthoritativeLegalValue as NamedNode<'http://schema.org/AuthoritativeLegalValue'>,
  DefinitiveLegalValue: schema.DefinitiveLegalValue as NamedNode<'http://schema.org/DefinitiveLegalValue'>,
  OfficialLegalValue: schema.OfficialLegalValue as NamedNode<'http://schema.org/OfficialLegalValue'>,
  UnofficialLegalValue: schema.UnofficialLegalValue as NamedNode<'http://schema.org/UnofficialLegalValue'>,
};

export type LegalValueLevel =
  NamedNode<'http://schema.org/AuthoritativeLegalValue'>
  | NamedNode<'http://schema.org/DefinitiveLegalValue'>
  | NamedNode<'http://schema.org/OfficialLegalValue'>
  | NamedNode<'http://schema.org/UnofficialLegalValue'>;
