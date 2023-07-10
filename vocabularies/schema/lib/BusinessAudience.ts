import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AudienceMixin } from './Audience.js';

export interface BusinessAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, rdfine.RdfResource<D> {
  numberOfEmployees: Schema.QuantitativeValue<D> | undefined;
  yearlyRevenue: Schema.QuantitativeValue<D> | undefined;
  yearsInOperation: Schema.QuantitativeValue<D> | undefined;
}

export function BusinessAudienceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BusinessAudience & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BusinessAudienceClass extends AudienceMixin(Resource) {
    @rdfine.property.resource()
    numberOfEmployees: Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    yearlyRevenue: Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    yearsInOperation: Schema.QuantitativeValue | undefined;
  }
  return BusinessAudienceClass as any
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

export const fromPointer = createFactory<BusinessAudience>([AudienceMixin, BusinessAudienceMixin], { types: [schema.BusinessAudience] });
