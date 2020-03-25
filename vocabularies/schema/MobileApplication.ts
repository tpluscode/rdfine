import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<MobileApplication>) {
    super(arg, init)
    this.types.add(schema.MobileApplication)
  }
}
MobileApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MobileApplication)
MobileApplicationMixin.Class = MobileApplicationImpl
