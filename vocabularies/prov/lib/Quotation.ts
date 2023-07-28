import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface Quotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, rdfine.RdfResource<D> {
}

export function QuotationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Quotation & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class QuotationClass extends DerivationMixin(Resource) {
  }
  return QuotationClass as any
}

class QuotationImpl extends QuotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Quotation>) {
    super(arg, init)
    this.types.add(prov.Quotation)
  }

  static readonly __mixins: Mixin[] = [QuotationMixin, DerivationMixin];
}
QuotationMixin.appliesTo = prov.Quotation
QuotationMixin.Class = QuotationImpl

export const fromPointer = createFactory<Quotation>([DerivationMixin, QuotationMixin], { types: [prov.Quotation] });
