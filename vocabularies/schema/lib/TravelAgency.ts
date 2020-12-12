import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface TravelAgency<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function TravelAgencyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TravelAgency> & RdfResourceCore> & Base {
  @namespace(schema)
  class TravelAgencyClass extends LocalBusinessMixin(Resource) implements Partial<TravelAgency> {
  }
  return TravelAgencyClass
}

class TravelAgencyImpl extends TravelAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TravelAgency>) {
    super(arg, init)
    this.types.add(schema.TravelAgency)
  }

  static readonly __mixins: Mixin[] = [TravelAgencyMixin, LocalBusinessMixin];
}
TravelAgencyMixin.appliesTo = schema.TravelAgency
TravelAgencyMixin.Class = TravelAgencyImpl

export const fromPointer = createFactory<TravelAgency>([LocalBusinessMixin, TravelAgencyMixin], { types: [schema.TravelAgency] });
