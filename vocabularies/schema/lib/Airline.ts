import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface Airline<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
  boardingPolicy: Schema.BoardingPolicyType | undefined;
  iataCode: string | undefined;
}

export function AirlineMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Airline & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AirlineClass extends OrganizationMixin(Resource) {
    @rdfine.property()
    boardingPolicy: Schema.BoardingPolicyType | undefined;
    @rdfine.property.literal()
    iataCode: string | undefined;
  }
  return AirlineClass as any
}

class AirlineImpl extends AirlineMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Airline>) {
    super(arg, init)
    this.types.add(schema.Airline)
  }

  static readonly __mixins: Mixin[] = [AirlineMixin, OrganizationMixin];
}
AirlineMixin.appliesTo = schema.Airline
AirlineMixin.Class = AirlineImpl

export const fromPointer = createFactory<Airline>([OrganizationMixin, AirlineMixin], { types: [schema.Airline] });
