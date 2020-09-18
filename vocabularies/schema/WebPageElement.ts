import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebPageElement extends Schema.CreativeWork, RdfResource {
  cssSelector: string | undefined;
  xpath: string | undefined;
}

export function WebPageElementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageElementClass extends CreativeWorkMixin(Resource) implements WebPageElement {
    @property.literal()
    cssSelector: string | undefined;
    @property.literal()
    xpath: string | undefined;
  }
  return WebPageElementClass
}

class WebPageElementImpl extends WebPageElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebPageElement>) {
    super(arg, init)
    this.types.add(schema.WebPageElement)
  }

  static readonly __mixins: Mixin[] = [WebPageElementMixin, CreativeWorkMixin];
}
WebPageElementMixin.appliesTo = schema.WebPageElement
WebPageElementMixin.Class = WebPageElementImpl
