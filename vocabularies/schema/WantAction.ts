import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface WantAction extends Schema.ReactAction, RdfResource {
}

export default function WantActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WantActionClass extends ReactActionMixin(Resource) implements WantAction {
  }
  return WantActionClass
}

class WantActionImpl extends WantActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WantAction>) {
    super(arg, init)
    this.types.add(schema.WantAction)
  }
}
WantActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WantAction)
WantActionMixin.Class = WantActionImpl
