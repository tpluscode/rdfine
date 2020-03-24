import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FinancialProductMixin from './FinancialProduct';

export interface CurrencyConversionService extends Schema.FinancialProduct, RdfResource {
}

export default function CurrencyConversionServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CurrencyConversionServiceClass extends FinancialProductMixin(Resource) implements CurrencyConversionService {
  }
  return CurrencyConversionServiceClass
}

class CurrencyConversionServiceImpl extends CurrencyConversionServiceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CurrencyConversionService)
  }
}
CurrencyConversionServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CurrencyConversionService)
CurrencyConversionServiceMixin.Class = CurrencyConversionServiceImpl
