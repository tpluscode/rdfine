import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface Taxi extends Schema.Service, RdfResource {
}

export function TaxiMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiClass extends ServiceMixin(Resource) implements Taxi {
  }
  return TaxiClass
}

class TaxiImpl extends TaxiMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Taxi>) {
    super(arg, init)
    this.types.add(schema.Taxi)
  }

  static readonly __mixins: Mixin[] = [TaxiMixin, ServiceMixin];
}
TaxiMixin.appliesTo = schema.Taxi
TaxiMixin.Class = TaxiImpl
