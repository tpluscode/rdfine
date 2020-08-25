import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  CoOp: schema.CoOp as NamedNode<'http://schema.org/CoOp'>,
  MultiPlayer: schema.MultiPlayer as NamedNode<'http://schema.org/MultiPlayer'>,
  SinglePlayer: schema.SinglePlayer as NamedNode<'http://schema.org/SinglePlayer'>,
};

export type GamePlayMode =
  NamedNode<'http://schema.org/CoOp'>
  | NamedNode<'http://schema.org/MultiPlayer'>
  | NamedNode<'http://schema.org/SinglePlayer'>;
