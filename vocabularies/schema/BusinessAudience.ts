import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AudienceMixin from './Audience';

export interface BusinessAudience extends Schema.Audience, RdfResource {
  numberOfEmployees: Schema.QuantitativeValue;
  yearlyRevenue: Schema.QuantitativeValue;
  yearsInOperation: Schema.QuantitativeValue;
}

export default function BusinessAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusinessAudienceClass extends AudienceMixin(Resource) implements BusinessAudience {
    @property.resource()
    numberOfEmployees!: Schema.QuantitativeValue;
    @property.resource()
    yearlyRevenue!: Schema.QuantitativeValue;
    @property.resource()
    yearsInOperation!: Schema.QuantitativeValue;
  }
  return BusinessAudienceClass
}

class BusinessAudienceImpl extends BusinessAudienceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BusinessAudience)
  }
}
BusinessAudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusinessAudience)
BusinessAudienceMixin.Class = BusinessAudienceImpl
