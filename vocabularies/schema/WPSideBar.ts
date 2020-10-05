import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageElementMixin } from './WebPageElement';

export interface WPSideBar<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function WPSideBarMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WPSideBarClass extends WebPageElementMixin(Resource) implements WPSideBar {
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
