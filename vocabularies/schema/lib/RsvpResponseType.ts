import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  RsvpResponseMaybe: schema.RsvpResponseMaybe as NamedNode<'http://schema.org/RsvpResponseMaybe'>,
  RsvpResponseNo: schema.RsvpResponseNo as NamedNode<'http://schema.org/RsvpResponseNo'>,
  RsvpResponseYes: schema.RsvpResponseYes as NamedNode<'http://schema.org/RsvpResponseYes'>,
};

export type RsvpResponseType =
  NamedNode<'http://schema.org/RsvpResponseMaybe'>
  | NamedNode<'http://schema.org/RsvpResponseNo'>
  | NamedNode<'http://schema.org/RsvpResponseYes'>;
