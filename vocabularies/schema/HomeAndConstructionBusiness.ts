import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface HomeAndConstructionBusiness extends Schema.LocalBusiness, RdfResource {
}

export default function HomeAndConstructionBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HomeAndConstructionBusinessClass extends LocalBusinessMixin(Resource) implements HomeAndConstructionBusiness {
  }
  return HomeAndConstructionBusinessClass
}

class HomeAndConstructionBusinessImpl extends HomeAndConstructionBusinessMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HomeAndConstructionBusiness)
  }
}
HomeAndConstructionBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HomeAndConstructionBusiness)
HomeAndConstructionBusinessMixin.Class = HomeAndConstructionBusinessImpl
