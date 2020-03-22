import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Hostel extends Schema.LodgingBusiness, RdfResource {
}

export default function HostelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HostelClass extends LodgingBusinessMixin(Resource) implements Hostel {
  }
  return HostelClass
}

class HostelImpl extends HostelMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Hostel)
  }
}
HostelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Hostel)
HostelMixin.Class = HostelImpl
