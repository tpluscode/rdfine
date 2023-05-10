import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface BefriendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
}

export function BefriendActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BefriendAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BefriendActionClass extends InteractActionMixin(Resource) implements Partial<BefriendAction> {
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

export const fromPointer = createFactory<BefriendAction>([InteractActionMixin, BefriendActionMixin], { types: [schema.BefriendAction] });
