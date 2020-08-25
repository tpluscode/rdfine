import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebSite extends Schema.CreativeWork, RdfResource {
  issn: string;
}

export function WebSiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebSiteClass extends CreativeWorkMixin(Resource) implements WebSite {
    @property.literal()
    issn!: string;
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
