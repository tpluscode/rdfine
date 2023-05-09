import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface CheckoutPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function CheckoutPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CheckoutPage> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CheckoutPageClass extends WebPageMixin(Resource) implements Partial<CheckoutPage> {
  }
  return CheckoutPageClass
}

class CheckoutPageImpl extends CheckoutPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckoutPage>) {
    super(arg, init)
    this.types.add(schema.CheckoutPage)
  }

  static readonly __mixins: Mixin[] = [CheckoutPageMixin, WebPageMixin];
}
CheckoutPageMixin.appliesTo = schema.CheckoutPage
CheckoutPageMixin.Class = CheckoutPageImpl

export const fromPointer = createFactory<CheckoutPage>([WebPageMixin, CheckoutPageMixin], { types: [schema.CheckoutPage] });
