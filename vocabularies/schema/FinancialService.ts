import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface FinancialService extends Schema.LocalBusiness, RdfResource {
  feesAndCommissionsSpecification: string;
  feesAndCommissionsSpecificationTerm: rdf.NamedNode;
}

export default function FinancialServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialServiceClass extends LocalBusinessMixin(Resource) implements FinancialService {
    @property.literal()
    feesAndCommissionsSpecification!: string;
    @property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm!: rdf.NamedNode;
  }
  return FinancialServiceClass
}

class FinancialServiceImpl extends FinancialServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FinancialService>) {
    super(arg, init)
    this.types.add(schema.FinancialService)
  }
}
FinancialServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FinancialService)
FinancialServiceMixin.Class = FinancialServiceImpl
