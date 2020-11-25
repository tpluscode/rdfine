import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface WantAction<ID extends ResourceNode = ResourceNode> extends Schema.ReactAction<ID>, RdfResource<ID> {
}

export function WantActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WantActionClass extends ReactActionMixin(Resource) implements WantAction {
  }
  return WantActionClass
}

class WantActionImpl extends WantActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WantAction>) {
    super(arg, init)
    this.types.add(schema.WantAction)
  }

  static readonly __mixins: Mixin[] = [WantActionMixin, ReactActionMixin];
}
WantActionMixin.appliesTo = schema.WantAction
WantActionMixin.Class = WantActionImpl
