import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialServiceMixin } from './FinancialService.js';

export interface InsuranceAgency<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, rdfine.RdfResource<D> {
}

export function InsuranceAgencyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InsuranceAgency & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InsuranceAgencyClass extends FinancialServiceMixin(Resource) {
  }
  return InsuranceAgencyClass as any
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
