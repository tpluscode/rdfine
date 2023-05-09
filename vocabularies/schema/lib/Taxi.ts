import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface Taxi<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, rdfine.RdfResource<D> {
}

export function TaxiMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Taxi> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
