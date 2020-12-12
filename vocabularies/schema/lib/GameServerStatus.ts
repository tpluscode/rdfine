import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  OfflinePermanently: schema.OfflinePermanently as NamedNode<'http://schema.org/OfflinePermanently'>,
  OfflineTemporarily: schema.OfflineTemporarily as NamedNode<'http://schema.org/OfflineTemporarily'>,
  Online: schema.Online as NamedNode<'http://schema.org/Online'>,
  OnlineFull: schema.OnlineFull as NamedNode<'http://schema.org/OnlineFull'>,
};

export type GameServerStatus =
  NamedNode<'http://schema.org/OfflinePermanently'>
  | NamedNode<'http://schema.org/OfflineTemporarily'>
  | NamedNode<'http://schema.org/Online'>
  | NamedNode<'http://schema.org/OnlineFull'>;
