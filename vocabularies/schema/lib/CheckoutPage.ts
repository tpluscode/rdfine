import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface CheckoutPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function CheckoutPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CheckoutPage> & RdfResourceCore> & Base {
  @namespace(schema)
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
