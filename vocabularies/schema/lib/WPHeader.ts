import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageElementMixin } from './WebPageElement';

export interface WPHeader<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function WPHeaderMixin<Base extends Constructor>(Resource: Base): Constructor<WPHeader> & Base {
  @namespace(schema)
  class WPHeaderClass extends WebPageElementMixin(Resource) implements WPHeader {
  }
  return WPHeaderClass
}

class WPHeaderImpl extends WPHeaderMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WPHeader>) {
    super(arg, init)
    this.types.add(schema.WPHeader)
  }

  static readonly __mixins: Mixin[] = [WPHeaderMixin, WebPageElementMixin];
}
WPHeaderMixin.appliesTo = schema.WPHeader
WPHeaderMixin.Class = WPHeaderImpl
