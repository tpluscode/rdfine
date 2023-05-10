import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';
import { PlaceMixin } from './Place.js';

export interface LocalBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, Schema.Place<D>, rdfine.RdfResource<D> {
  branchOf: Schema.Organization<D> | undefined;
  currenciesAccepted: string | undefined;
  openingHours: string | undefined;
  paymentAccepted: string | undefined;
  priceRange: string | undefined;
}

export function LocalBusinessMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LocalBusiness> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LocalBusinessClass extends PlaceMixin(OrganizationMixin(Resource)) implements Partial<LocalBusiness> {
    @rdfine.property.resource()
    branchOf: Schema.Organization | undefined;
    @rdfine.property.literal()
    currenciesAccepted: string | undefined;
    @rdfine.property.literal()
    openingHours: string | undefined;
    @rdfine.property.literal()
    paymentAccepted: string | undefined;
    @rdfine.property.literal()
    priceRange: string | undefined;
  }
  return LocalBusinessClass
}

class LocalBusinessImpl extends LocalBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LocalBusiness>) {
    super(arg, init)
    this.types.add(schema.LocalBusiness)
  }

  static readonly __mixins: Mixin[] = [LocalBusinessMixin, OrganizationMixin, PlaceMixin];
}
LocalBusinessMixin.appliesTo = schema.LocalBusiness
LocalBusinessMixin.Class = LocalBusinessImpl

export const fromPointer = createFactory<LocalBusiness>([PlaceMixin, OrganizationMixin, LocalBusinessMixin], { types: [schema.LocalBusiness] });
