import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageElementMixin } from './WebPageElement.js';

export interface WPSideBar<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, rdfine.RdfResource<D> {
}

export function WPSideBarMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WPSideBar & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WPSideBarClass extends WebPageElementMixin(Resource) {
  }
  return WPSideBarClass as any
}

class WPSideBarImpl extends WPSideBarMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WPSideBar>) {
    super(arg, init)
    this.types.add(schema.WPSideBar)
  }

  static readonly __mixins: Mixin[] = [WPSideBarMixin, WebPageElementMixin];
}
WPSideBarMixin.appliesTo = schema.WPSideBar
WPSideBarMixin.Class = WPSideBarImpl

export const fromPointer = createFactory<WPSideBar>([WebPageElementMixin, WPSideBarMixin], { types: [schema.WPSideBar] });
