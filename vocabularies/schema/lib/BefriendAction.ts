import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InteractActionMixin } from './InteractAction';

export interface BefriendAction<ID extends ResourceNode = ResourceNode> extends Schema.InteractAction<ID>, RdfResource<ID> {
}

export function BefriendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BefriendActionClass extends InteractActionMixin(Resource) implements BefriendAction {
  }
  return BefriendActionClass
}

class BefriendActionImpl extends BefriendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BefriendAction>) {
    super(arg, init)
    this.types.add(schema.BefriendAction)
  }

  static readonly __mixins: Mixin[] = [BefriendActionMixin, InteractActionMixin];
}
BefriendActionMixin.appliesTo = schema.BefriendAction
BefriendActionMixin.Class = BefriendActionImpl
