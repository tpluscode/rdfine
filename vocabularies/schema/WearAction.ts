import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { UseActionMixin } from './UseAction';

export interface WearAction extends Schema.UseAction, RdfResource {
}

export function WearActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WearActionClass extends UseActionMixin(Resource) implements WearAction {
  }
  return WearActionClass
}

class WearActionImpl extends WearActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WearAction>) {
    super(arg, init)
    this.types.add(schema.WearAction)
  }
}
WearActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WearAction)
WearActionMixin.Class = WearActionImpl
