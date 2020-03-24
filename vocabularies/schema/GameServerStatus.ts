import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type GameServerStatus = NamedNode;

export default {
  OfflinePermanently: schema.OfflinePermanently,
  OfflineTemporarily: schema.OfflineTemporarily,
  Online: schema.Online,
  OnlineFull: schema.OnlineFull,
};
