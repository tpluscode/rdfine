import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import SoftwareApplicationMixin from './SoftwareApplication';

export interface MobileApplication extends Schema.SoftwareApplication, RdfResource {
  carrierRequirements: string;
}

export default function MobileApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MobileApplicationClass extends SoftwareApplicationMixin(Resource) implements MobileApplication {
    @property.literal()
    carrierRequirements!: string;
  }
  return MobileApplicationClass
}

class MobileApplicationImpl extends MobileApplicationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MobileApplication)
  }
}
MobileApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MobileApplication)
MobileApplicationMixin.Class = MobileApplicationImpl
