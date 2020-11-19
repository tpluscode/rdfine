import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageElementMixin } from './WebPageElement';

export interface WPFooter<ID extends ResourceNode = ResourceNode> extends Schema.WebPageElement<ID>, RdfResource<ID> {
}

export function WPFooterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WPFooterClass extends WebPageElementMixin(Resource) implements WPFooter {
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
