import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface AutomotiveBusiness extends Schema.LocalBusiness, RdfResource {
}

export default function AutomotiveBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutomotiveBusinessClass extends LocalBusinessMixin(Resource) implements AutomotiveBusiness {
  }
  return AutomotiveBusinessClass
}

class AutomotiveBusinessImpl extends AutomotiveBusinessMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AutomotiveBusiness)
  }
}
AutomotiveBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutomotiveBusiness)
AutomotiveBusinessMixin.Class = AutomotiveBusinessImpl
