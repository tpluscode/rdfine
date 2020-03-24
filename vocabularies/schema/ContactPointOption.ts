import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type ContactPointOption = NamedNode;

export default {
  HearingImpairedSupported: schema.HearingImpairedSupported,
  TollFree: schema.TollFree,
};
