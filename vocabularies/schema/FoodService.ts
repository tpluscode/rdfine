import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface FoodService extends Schema.Service, RdfResource {
}

export default function FoodServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodServiceClass extends ServiceMixin(Resource) implements FoodService {
  }
  return FoodServiceClass
}

class FoodServiceImpl extends FoodServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FoodService>) {
    super(arg)
    this.types.add(schema.FoodService)
    initializeProperties(this, init)
  }
}
FoodServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodService)
FoodServiceMixin.Class = FoodServiceImpl
