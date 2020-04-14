import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<FoodService>) {
    super(arg, init)
    this.types.add(schema.FoodService)
  }
}
FoodServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodService)
FoodServiceMixin.Class = FoodServiceImpl
