import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type BookFormatType = NamedNode;

export default {
  AudiobookFormat: schema.AudiobookFormat,
  EBook: schema.EBook,
  Hardcover: schema.Hardcover,
  Paperback: schema.Paperback,
};
