import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialServiceMixin } from './FinancialService';

export interface InsuranceAgency<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, RdfResource<D> {
}

export function InsuranceAgencyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InsuranceAgency> & RdfResourceCore> & Base {
  @namespace(schema)
  class InsuranceAgencyClass extends FinancialServiceMixin(Resource) implements Partial<InsuranceAgency> {
  }
  return InsuranceAgencyClass
}

class InsuranceAgencyImpl extends InsuranceAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InsuranceAgency>) {
    super(arg, init)
    this.types.add(schema.InsuranceAgency)
  }

  static readonly __mixins: Mixin[] = [InsuranceAgencyMixin, FinancialServiceMixin];
}
InsuranceAgencyMixin.appliesTo = schema.InsuranceAgency
InsuranceAgencyMixin.Class = InsuranceAgencyImpl

export const fromPointer = createFactory<InsuranceAgency>([FinancialServiceMixin, InsuranceAgencyMixin], { types: [schema.InsuranceAgency] });
