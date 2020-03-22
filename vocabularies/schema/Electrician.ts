import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface Electrician extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function ElectricianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElectricianClass extends HomeAndConstructionBusinessMixin(Resource) implements Electrician {
  }
  return ElectricianClass
}

class ElectricianImpl extends ElectricianMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Electrician)
  }
}
ElectricianMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Electrician)
ElectricianMixin.Class = ElectricianImpl
