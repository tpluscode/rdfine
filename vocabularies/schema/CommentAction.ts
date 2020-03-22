import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CommentAction)
  }
}
CommentActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CommentAction)
CommentActionMixin.Class = CommentActionImpl