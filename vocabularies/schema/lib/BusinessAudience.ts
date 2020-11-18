import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudienceMixin } from './Audience';

export interface BusinessAudience<ID extends ResourceNode = ResourceNode> extends Schema.Audience<ID>, RdfResource<ID> {
  numberOfEmployees: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  yearlyRevenue: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  yearsInOperation: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
}

export function BusinessAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusinessAudienceClass extends AudienceMixin(Resource) implements BusinessAudience {
    @property.resource()
    numberOfEmployees: Schema.QuantitativeValue | undefined;
    @property.resource()
    yearlyRevenue: Schema.QuantitativeValue | undefined;
    @property.resource()
    yearsInOperation: Schema.QuantitativeValue | undefined;
  }
  return BusinessAudienceClass
}

class BusinessAudienceImpl extends BusinessAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusinessAudience>) {
    super(arg, init)
    this.types.add(schema.BusinessAudience)
  }

  static readonly __mixins: Mixin[] = [BusinessAudienceMixin, AudienceMixin];
}
BusinessAudienceMixin.appliesTo = schema.BusinessAudience
BusinessAudienceMixin.Class = BusinessAudienceImpl
