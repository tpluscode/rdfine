import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface WebPageElement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  cssSelector: string | undefined;
  xpath: string | undefined;
}

export function WebPageElementMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WebPageElement & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WebPageElementClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    cssSelector: string | undefined;
    @rdfine.property.literal()
    xpath: string | undefined;
  }
  return WebPageElementClass as any
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
