import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MobileApplication>) {
    super(arg)
    this.types.add(schema.MobileApplication)
    initializeProperties<MobileApplication>(this, init)
  }
}
MobileApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MobileApplication)
MobileApplicationMixin.Class = MobileApplicationImpl
