import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface FinancialService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
  feesAndCommissionsSpecification: string | undefined;
  feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
}

export function FinancialServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FinancialService> & RdfResourceCore> & Base {
  @namespace(schema)
  class FinancialServiceClass extends LocalBusinessMixin(Resource) implements Partial<FinancialService> {
    @property.literal()
    feesAndCommissionsSpecification: string | undefined;
    @property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
  }
  return FinancialServiceClass
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
