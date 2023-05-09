import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface LeaveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function LeaveActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LeaveAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LeaveActionClass extends InteractActionMixin(Resource) implements Partial<LeaveAction> {
    @rdfine.property.resource()
    event: Schema.Event | undefined;
  }
  return LeaveActionClass
}

class LeaveActionImpl extends LeaveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LeaveAction>) {
    super(arg, init)
    this.types.add(schema.LeaveAction)
  }

  static readonly __mixins: Mixin[] = [LeaveActionMixin, InteractActionMixin];
}
LeaveActionMixin.appliesTo = schema.LeaveAction
LeaveActionMixin.Class = LeaveActionImpl

export const fromPointer = createFactory<LeaveAction>([InteractActionMixin, LeaveActionMixin], { types: [schema.LeaveAction] });
