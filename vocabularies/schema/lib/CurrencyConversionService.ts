import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialProductMixin } from './FinancialProduct';

export interface CurrencyConversionService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, RdfResource<D> {
}

export function CurrencyConversionServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CurrencyConversionService> & RdfResourceCore> & Base {
  @namespace(schema)
  class CurrencyConversionServiceClass extends FinancialProductMixin(Resource) implements Partial<CurrencyConversionService> {
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

export const fromPointer = createFactory<CurrencyConversionService>([FinancialProductMixin, CurrencyConversionServiceMixin], { types: [schema.CurrencyConversionService] });
