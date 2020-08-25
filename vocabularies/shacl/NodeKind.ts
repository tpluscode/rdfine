import { NamedNode } from 'rdf-js';
import { sh } from './lib/namespace';

export default {
  BlankNode: sh.BlankNode as NamedNode<'http://www.w3.org/ns/shacl#BlankNode'>,
  BlankNodeOrIRI: sh.BlankNodeOrIRI as NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrIRI'>,
  BlankNodeOrLiteral: sh.BlankNodeOrLiteral as NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrLiteral'>,
  IRI: sh.IRI as NamedNode<'http://www.w3.org/ns/shacl#IRI'>,
  IRIOrLiteral: sh.IRIOrLiteral as NamedNode<'http://www.w3.org/ns/shacl#IRIOrLiteral'>,
  Literal: sh.Literal as NamedNode<'http://www.w3.org/ns/shacl#Literal'>,
};

export type NodeKind = 
  NamedNode<'http://www.w3.org/ns/shacl#BlankNode'>
  | NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrIRI'>
  | NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrLiteral'>
  | NamedNode<'http://www.w3.org/ns/shacl#IRI'>
  | NamedNode<'http://www.w3.org/ns/shacl#IRIOrLiteral'>
  | NamedNode<'http://www.w3.org/ns/shacl#Literal'>;
