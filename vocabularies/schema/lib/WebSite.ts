import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebSite<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  issn: string | undefined;
}

export function WebSiteMixin<Base extends Constructor>(Resource: Base): Constructor<WebSite> & Base {
  @namespace(schema)
  class WebSiteClass extends CreativeWorkMixin(Resource) implements Partial<WebSite> {
    @property.literal()
    issn: string | undefined;
  }
  return WebSiteClass
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
