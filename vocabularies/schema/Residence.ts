import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface Residence extends Schema.Place, RdfResource {
}

export default function ResidenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResidenceClass extends PlaceMixin(Resource) implements Residence {
  }
  return ResidenceClass
}

class ResidenceImpl extends ResidenceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Residence)
  }
}
ResidenceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Residence)
ResidenceMixin.Class = ResidenceImpl