import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type RsvpResponseType = NamedNode;

export default {
  RsvpResponseMaybe: schema.RsvpResponseMaybe,
  RsvpResponseNo: schema.RsvpResponseNo,
  RsvpResponseYes: schema.RsvpResponseYes,
};
