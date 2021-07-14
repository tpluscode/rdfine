import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  CoOp: schema.CoOp,
  MultiPlayer: schema.MultiPlayer,
  SinglePlayer: schema.SinglePlayer,
};

export type GamePlayMode = typeof values[keyof typeof values];

export default values;
