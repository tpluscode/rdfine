import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FoodService)
  }
}
FoodServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodService)
FoodServiceMixin.Class = FoodServiceImpl
