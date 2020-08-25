import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageMixin } from './WebPage';

export interface CheckoutPage extends Schema.WebPage, RdfResource {
}

export function CheckoutPageMixin<Base extends Constructor>(Resource: Base) {
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
