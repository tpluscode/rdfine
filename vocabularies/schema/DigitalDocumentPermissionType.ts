import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  CommentPermission: schema.CommentPermission as NamedNode<'http://schema.org/CommentPermission'>,
  ReadPermission: schema.ReadPermission as NamedNode<'http://schema.org/ReadPermission'>,
  WritePermission: schema.WritePermission as NamedNode<'http://schema.org/WritePermission'>,
};

export type DigitalDocumentPermissionType =
  NamedNode<'http://schema.org/CommentPermission'>
  | NamedNode<'http://schema.org/ReadPermission'>
  | NamedNode<'http://schema.org/WritePermission'>;
