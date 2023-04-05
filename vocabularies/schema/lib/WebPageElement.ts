import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebPageElement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  cssSelector: string | undefined;
  xpath: string | undefined;
}

export function WebPageElementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WebPageElement> & RdfResourceCore> & Base {
  @namespace(schema)
  class WebPageElementClass extends CreativeWorkMixin(Resource) implements Partial<WebPageElement> {
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

export const fromPointer = createFactory<WebPageElement>([CreativeWorkMixin, WebPageElementMixin], { types: [schema.WebPageElement] });
