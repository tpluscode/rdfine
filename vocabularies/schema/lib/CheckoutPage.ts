import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface CheckoutPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function CheckoutPageMixin<Base extends Constructor>(Resource: Base): Constructor<CheckoutPage> & Base {
  @namespace(schema)
  class CheckoutPageClass extends WebPageMixin(Resource) implements CheckoutPage {
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
