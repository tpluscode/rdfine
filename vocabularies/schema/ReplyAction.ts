import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface ReplyAction extends Schema.CommunicateAction, RdfResource {
  resultComment: Schema.Comment;
}

export default function ReplyActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReplyActionClass extends CommunicateActionMixin(Resource) implements ReplyAction {
    @property.resource()
    resultComment!: Schema.Comment;
  }
  return ReplyActionClass
}

class ReplyActionImpl extends ReplyActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ReplyAction>) {
    super(arg)
    this.types.add(schema.ReplyAction)
    initializeProperties<ReplyAction>(this, init)
  }
}
ReplyActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReplyAction)
ReplyActionMixin.Class = ReplyActionImpl
