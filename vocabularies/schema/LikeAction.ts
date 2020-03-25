import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface LikeAction extends Schema.ReactAction, RdfResource {
}

export default function LikeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LikeActionClass extends ReactActionMixin(Resource) implements LikeAction {
  }
  return LikeActionClass
}

class LikeActionImpl extends LikeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LikeAction>) {
    super(arg)
    this.types.add(schema.LikeAction)
    initializeProperties<LikeAction>(this, init)
  }
}
LikeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LikeAction)
LikeActionMixin.Class = LikeActionImpl
