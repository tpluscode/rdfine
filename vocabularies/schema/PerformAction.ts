import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlayActionMixin from './PlayAction';

export interface PerformAction extends Schema.PlayAction, RdfResource {
  entertainmentBusiness: Schema.EntertainmentBusiness;
}

export default function PerformActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformActionClass extends PlayActionMixin(Resource) implements PerformAction {
    @property.resource()
    entertainmentBusiness!: Schema.EntertainmentBusiness;
  }
  return PerformActionClass
}

class PerformActionImpl extends PerformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformAction>) {
    super(arg, init)
    this.types.add(schema.PerformAction)
  }
}
PerformActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformAction)
PerformActionMixin.Class = PerformActionImpl
