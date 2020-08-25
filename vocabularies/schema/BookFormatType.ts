import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  AudiobookFormat: schema.AudiobookFormat as NamedNode<'http://schema.org/AudiobookFormat'>,
  EBook: schema.EBook as NamedNode<'http://schema.org/EBook'>,
  Hardcover: schema.Hardcover as NamedNode<'http://schema.org/Hardcover'>,
  Paperback: schema.Paperback as NamedNode<'http://schema.org/Paperback'>,
};

export type BookFormatType =
  NamedNode<'http://schema.org/AudiobookFormat'>
  | NamedNode<'http://schema.org/EBook'>
  | NamedNode<'http://schema.org/Hardcover'>
  | NamedNode<'http://schema.org/Paperback'>;
