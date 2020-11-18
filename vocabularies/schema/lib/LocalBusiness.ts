import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';
import { PlaceMixin } from './Place';

export interface LocalBusiness<ID extends ResourceNode = ResourceNode> extends Schema.Organization<ID>, Schema.Place<ID>, RdfResource<ID> {
  branchOf: Schema.Organization<SiblingNode<ID>> | undefined;
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
