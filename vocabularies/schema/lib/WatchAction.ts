import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, ResourceIdentifier, DatasetType } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface WatchAction<ID extends ResourceNode = ResourceNode> extends Schema.ConsumeAction<ID>, RdfResource<ID> {
}

export function WatchActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WatchActionClass extends ConsumeActionMixin(Resource) implements WatchAction {
  }
  return WatchActionClass
}

class WatchActionImpl extends WatchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WatchAction>) {
    super(arg, init)
    this.types.add(schema.WatchAction)
  }

  static readonly __mixins: Mixin[] = [WatchActionMixin, ConsumeActionMixin];
}
WatchActionMixin.appliesTo = schema.WatchAction
WatchActionMixin.Class = WatchActionImpl
