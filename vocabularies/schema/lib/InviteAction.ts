import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface InviteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function InviteActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InviteAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class InviteActionClass extends CommunicateActionMixin(Resource) implements Partial<InviteAction> {
    @property.resource()
    event: Schema.Event | undefined;
  }
  return InviteActionClass
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
