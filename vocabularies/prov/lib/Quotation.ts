import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { DerivationMixin } from './Derivation';

export interface Quotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, RdfResource<D> {
}

export function QuotationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Quotation> & RdfResourceCore> & Base {
  @namespace(prov)
  class QuotationClass extends DerivationMixin(Resource) implements Partial<Quotation> {
  }
  return QuotationClass
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
