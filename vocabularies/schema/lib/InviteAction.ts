import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface InviteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, rdfine.RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function InviteActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InviteAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InviteActionClass extends CommunicateActionMixin(Resource) {
    @rdfine.property.resource()
    event: Schema.Event | undefined;
  }
  return InviteActionClass as any
}

class InviteActionImpl extends InviteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InviteAction>) {
    super(arg, init)
    this.types.add(schema.InviteAction)
  }

  static readonly __mixins: Mixin[] = [InviteActionMixin, CommunicateActionMixin];
}
InviteActionMixin.appliesTo = schema.InviteAction
InviteActionMixin.Class = InviteActionImpl

export const fromPointer = createFactory<InviteAction>([CommunicateActionMixin, InviteActionMixin], { types: [schema.InviteAction] });
