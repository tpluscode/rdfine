import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface MotorcycleDealer extends Schema.AutomotiveBusiness, RdfResource {
}

export function MotorcycleDealerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotorcycleDealerClass extends AutomotiveBusinessMixin(Resource) implements MotorcycleDealer {
  }
  return MotorcycleDealerClass
}

class MotorcycleDealerImpl extends MotorcycleDealerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MotorcycleDealer>) {
    super(arg, init)
    this.types.add(schema.MotorcycleDealer)
  }

  static readonly __mixins: Mixin[] = [MotorcycleDealerMixin, AutomotiveBusinessMixin];
}
MotorcycleDealerMixin.appliesTo = schema.MotorcycleDealer
MotorcycleDealerMixin.Class = MotorcycleDealerImpl
