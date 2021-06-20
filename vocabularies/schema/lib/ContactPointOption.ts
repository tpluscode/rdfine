import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  HearingImpairedSupported: schema.HearingImpairedSupported as NamedNode<'http://schema.org/HearingImpairedSupported'>,
  TollFree: schema.TollFree as NamedNode<'http://schema.org/TollFree'>,
};

export type ContactPointOption =
  NamedNode<'http://schema.org/HearingImpairedSupported'>
  | NamedNode<'http://schema.org/TollFree'>;
