import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialProductMixin } from './FinancialProduct';

export interface CurrencyConversionService<ID extends ResourceNode = ResourceNode> extends Schema.FinancialProduct<ID>, RdfResource<ID> {
}

export function CurrencyConversionServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CurrencyConversionServiceClass extends FinancialProductMixin(Resource) implements CurrencyConversionService {
  }
  return CurrencyConversionServiceClass
}

class CurrencyConversionServiceImpl extends CurrencyConversionServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CurrencyConversionService>) {
    super(arg, init)
    this.types.add(schema.CurrencyConversionService)
  }

  static readonly __mixins: Mixin[] = [CurrencyConversionServiceMixin, FinancialProductMixin];
}
CurrencyConversionServiceMixin.appliesTo = schema.CurrencyConversionService
CurrencyConversionServiceMixin.Class = CurrencyConversionServiceImpl
