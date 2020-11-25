import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface FAQPage<ID extends ResourceNode = ResourceNode> extends Schema.WebPage<ID>, RdfResource<ID> {
}

export function FAQPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FAQPageClass extends WebPageMixin(Resource) implements FAQPage {
  }
  return FAQPageClass
}

class FAQPageImpl extends FAQPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FAQPage>) {
    super(arg, init)
    this.types.add(schema.FAQPage)
  }

  static readonly __mixins: Mixin[] = [FAQPageMixin, WebPageMixin];
}
FAQPageMixin.appliesTo = schema.FAQPage
FAQPageMixin.Class = FAQPageImpl
