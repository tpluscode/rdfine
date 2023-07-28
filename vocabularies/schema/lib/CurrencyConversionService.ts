import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialProductMixin } from './FinancialProduct.js';

export interface CurrencyConversionService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, rdfine.RdfResource<D> {
}

export function CurrencyConversionServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CurrencyConversionService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CurrencyConversionServiceClass extends FinancialProductMixin(Resource) {
  }
  return CurrencyConversionServiceClass as any
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

export const fromPointer = createFactory<CurrencyConversionService>([FinancialProductMixin, CurrencyConversionServiceMixin], { types: [schema.CurrencyConversionService] });
