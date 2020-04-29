import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface MarryAction extends Schema.InteractAction, RdfResource {
}

export function MarryActionMixin<Base extends Constructor>(Resource: Base) {
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
