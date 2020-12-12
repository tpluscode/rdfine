import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface Taxi<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
}

export function TaxiMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Taxi> & RdfResourceCore> & Base {
  @namespace(schema)
  class TaxiClass extends ServiceMixin(Resource) implements Partial<Taxi> {
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

export const fromPointer = createFactory<Taxi>([ServiceMixin, TaxiMixin], { types: [schema.Taxi] });
