import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';
import { PlaceMixin } from './Place';

export interface LocalBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, Schema.Place<D>, RdfResource<D> {
  branchOf: Schema.Organization<D> | undefined;
  currenciesAccepted: string | undefined;
  openingHours: string | undefined;
  paymentAccepted: string | undefined;
  priceRange: string | undefined;
}

export function LocalBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocalBusinessClass extends PlaceMixin(OrganizationMixin(Resource)) implements LocalBusiness {
    @property.resource()
    branchOf: Schema.Organization | undefined;
    @property.literal()
    currenciesAccepted: string | undefined;
    @property.literal()
    openingHours: string | undefined;
    @property.literal()
    paymentAccepted: string | undefined;
    @property.literal()
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
