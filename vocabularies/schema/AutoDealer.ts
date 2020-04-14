import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AutoDealer>) {
    super(arg, init)
    this.types.add(schema.AutoDealer)
  }
}
AutoDealerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoDealer)
AutoDealerMixin.Class = AutoDealerImpl
