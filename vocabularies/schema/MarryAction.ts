import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface MarryAction extends Schema.InteractAction, RdfResource {
}

export default function MarryActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MarryActionClass extends InteractActionMixin(Resource) implements MarryAction {
  }
  return MarryActionClass
}

class MarryActionImpl extends MarryActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MarryAction>) {
    super(arg, init)
    this.types.add(schema.MarryAction)
  }
}
MarryActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MarryAction)
MarryActionMixin.Class = MarryActionImpl
