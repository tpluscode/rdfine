import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageElementMixin } from './WebPageElement.js';

export interface SiteNavigationElement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, rdfine.RdfResource<D> {
}

export function SiteNavigationElementMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SiteNavigationElement> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SiteNavigationElementClass extends WebPageElementMixin(Resource) implements Partial<SiteNavigationElement> {
  }
  return SiteNavigationElementClass
}

class SiteNavigationElementImpl extends SiteNavigationElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SiteNavigationElement>) {
    super(arg, init)
    this.types.add(schema.SiteNavigationElement)
  }

  static readonly __mixins: Mixin[] = [SiteNavigationElementMixin, WebPageElementMixin];
}
SiteNavigationElementMixin.appliesTo = schema.SiteNavigationElement
SiteNavigationElementMixin.Class = SiteNavigationElementImpl

export const fromPointer = createFactory<SiteNavigationElement>([WebPageElementMixin, SiteNavigationElementMixin], { types: [schema.SiteNavigationElement] });
