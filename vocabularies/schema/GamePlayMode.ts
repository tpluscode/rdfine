import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type GamePlayMode = NamedNode;

export default {
  CoOp: schema.CoOp,
  MultiPlayer: schema.MultiPlayer,
  SinglePlayer: schema.SinglePlayer,
};
