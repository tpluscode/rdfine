import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageElementMixin } from './WebPageElement';

export interface WPSideBar<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function WPSideBarMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WPSideBar> & RdfResourceCore> & Base {
  @namespace(schema)
  class WPSideBarClass extends WebPageElementMixin(Resource) implements Partial<WPSideBar> {
  }
  return WPSideBarClass
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
