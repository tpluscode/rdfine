import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface FinancialService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
  feesAndCommissionsSpecification: string | undefined;
  feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
}

export function FinancialServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FinancialService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FinancialServiceClass extends LocalBusinessMixin(Resource) {
    @rdfine.property.literal()
    feesAndCommissionsSpecification: string | undefined;
    @rdfine.property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
  }
  return FinancialServiceClass as any
}

class FinancialServiceImpl extends FinancialServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FinancialService>) {
    super(arg, init)
    this.types.add(schema.FinancialService)
  }

  static readonly __mixins: Mixin[] = [FinancialServiceMixin, LocalBusinessMixin];
}
FinancialServiceMixin.appliesTo = schema.FinancialService
FinancialServiceMixin.Class = FinancialServiceImpl

export const fromPointer = createFactory<FinancialService>([LocalBusinessMixin, FinancialServiceMixin], { types: [schema.FinancialService] });
