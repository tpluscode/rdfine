import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<PerformAction>) {
    super(arg)
    this.types.add(schema.PerformAction)
    initializeProperties<PerformAction>(this, init)
  }
}
PerformActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformAction)
PerformActionMixin.Class = PerformActionImpl
