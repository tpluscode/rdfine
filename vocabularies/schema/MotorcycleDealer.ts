import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface MotorcycleDealer extends Schema.AutomotiveBusiness, RdfResource {
}

export default function MotorcycleDealerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotorcycleDealerClass extends AutomotiveBusinessMixin(Resource) implements MotorcycleDealer {
  }
  return MotorcycleDealerClass
}

class MotorcycleDealerImpl extends MotorcycleDealerMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MotorcycleDealer)
  }
}
MotorcycleDealerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MotorcycleDealer)
MotorcycleDealerMixin.Class = MotorcycleDealerImpl
