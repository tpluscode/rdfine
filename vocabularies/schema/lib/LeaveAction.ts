import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface LeaveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function LeaveActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LeaveAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class LeaveActionClass extends InteractActionMixin(Resource) implements Partial<LeaveAction> {
    @property.resource()
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
