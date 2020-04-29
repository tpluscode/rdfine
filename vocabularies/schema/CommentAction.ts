import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CommunicateActionMixin } from './CommunicateAction';

export interface CommentAction extends Schema.CommunicateAction, RdfResource {
  resultComment: Schema.Comment;
}

export function CommentActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CommentActionClass extends CommunicateActionMixin(Resource) implements CommentAction {
    @property.resource()
    resultComment!: Schema.Comment;
  }
  return CommentActionClass
}

class CommentActionImpl extends CommentActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CommentAction>) {
    super(arg, init)
    this.types.add(schema.CommentAction)
  }
}
CommentActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CommentAction)
CommentActionMixin.Class = CommentActionImpl
