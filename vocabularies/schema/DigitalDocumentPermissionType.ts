import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type DigitalDocumentPermissionType = NamedNode;

export default {
  CommentPermission: schema.CommentPermission,
  ReadPermission: schema.ReadPermission,
  WritePermission: schema.WritePermission,
};
