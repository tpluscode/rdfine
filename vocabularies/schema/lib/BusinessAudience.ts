import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudienceMixin } from './Audience';

export interface BusinessAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, RdfResource<D> {
  numberOfEmployees: Schema.QuantitativeValue<D> | undefined;
  yearlyRevenue: Schema.QuantitativeValue<D> | undefined;
  yearsInOperation: Schema.QuantitativeValue<D> | undefined;
}

export function BusinessAudienceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BusinessAudience> & RdfResourceCore> & Base {
  @namespace(schema)
  class BusinessAudienceClass extends AudienceMixin(Resource) implements Partial<BusinessAudience> {
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

export const fromPointer = createFactory<BusinessAudience>([AudienceMixin, BusinessAudienceMixin], { types: [schema.BusinessAudience] });
