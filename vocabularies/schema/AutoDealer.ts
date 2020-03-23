import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface AutoDealer extends Schema.AutomotiveBusiness, RdfResource {
}

export default function AutoDealerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoDealerClass extends AutomotiveBusinessMixin(Resource) implements AutoDealer {
  }
  return AutoDealerClass
}

class AutoDealerImpl extends AutoDealerMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AutoDealer)
  }
}
AutoDealerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoDealer)
AutoDealerMixin.Class = AutoDealerImpl
