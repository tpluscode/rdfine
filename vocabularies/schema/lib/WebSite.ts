import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface WebSite<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  issn: string | undefined;
}

export function WebSiteMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WebSite & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WebSiteClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    issn: string | undefined;
  }
  return WebSiteClass as any
}

class WebSiteImpl extends WebSiteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebSite>) {
    super(arg, init)
    this.types.add(schema.WebSite)
  }

  static readonly __mixins: Mixin[] = [WebSiteMixin, CreativeWorkMixin];
}
WebSiteMixin.appliesTo = schema.WebSite
WebSiteMixin.Class = WebSiteImpl

export const fromPointer = createFactory<WebSite>([CreativeWorkMixin, WebSiteMixin], { types: [schema.WebSite] });
