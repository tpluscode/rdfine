import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface Plumber extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function PlumberMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlumberClass extends HomeAndConstructionBusinessMixin(Resource) implements Plumber {
  }
  return PlumberClass
}

class PlumberImpl extends PlumberMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Plumber)
  }
}
PlumberMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Plumber)
PlumberMixin.Class = PlumberImpl
