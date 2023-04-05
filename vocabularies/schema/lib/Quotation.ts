import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Quotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  spokenByCharacter: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function QuotationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Quotation> & RdfResourceCore> & Base {
  @namespace(schema)
  class QuotationClass extends CreativeWorkMixin(Resource) implements Partial<Quotation> {
    @property.resource()
    spokenByCharacter: Schema.Organization | Schema.Person | undefined;
  }
  return QuotationClass
}

class QuotationImpl extends QuotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Quotation>) {
    super(arg, init)
    this.types.add(schema.Quotation)
  }

  static readonly __mixins: Mixin[] = [QuotationMixin, CreativeWorkMixin];
}
QuotationMixin.appliesTo = schema.Quotation
QuotationMixin.Class = QuotationImpl

export const fromPointer = createFactory<Quotation>([CreativeWorkMixin, QuotationMixin], { types: [schema.Quotation] });
