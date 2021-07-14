import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  OfflinePermanently: schema.OfflinePermanently,
  OfflineTemporarily: schema.OfflineTemporarily,
  Online: schema.Online,
  OnlineFull: schema.OnlineFull,
};

export type GameServerStatus = typeof values[keyof typeof values];

export default values;
