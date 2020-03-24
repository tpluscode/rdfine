import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface CommentAction extends Schema.CommunicateAction, RdfResource {
  resultComment: Schema.Comment;
}

export default function CommentActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CommentActionClass extends CommunicateActionMixin(Resource) implements CommentAction {
    @property.resource()
    resultComment!: Schema.Comment;
  }
  return CommentActionClass
}

class CommentActionImpl extends CommentActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CommentAction>) {
    super(arg)
    this.types.add(schema.CommentAction)
    initializeProperties(this, init)
  }
}
CommentActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CommentAction)
CommentActionMixin.Class = CommentActionImpl
