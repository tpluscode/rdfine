import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageElementMixin } from './WebPageElement.js';

export interface WPFooter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function WPFooterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WPFooter> & RdfResourceCore> & Base {
  @namespace(schema)
  class WPFooterClass extends WebPageElementMixin(Resource) implements Partial<WPFooter> {
  }
  return WPFooterClass
}

class WPFooterImpl extends WPFooterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WPFooter>) {
    super(arg, init)
    this.types.add(schema.WPFooter)
  }

  static readonly __mixins: Mixin[] = [WPFooterMixin, WebPageElementMixin];
}
WPFooterMixin.appliesTo = schema.WPFooter
WPFooterMixin.Class = WPFooterImpl

export const fromPointer = createFactory<WPFooter>([WebPageElementMixin, WPFooterMixin], { types: [schema.WPFooter] });
