import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface SubscribeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, RdfResource<D> {
}

export function SubscribeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SubscribeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class SubscribeActionClass extends InteractActionMixin(Resource) implements Partial<SubscribeAction> {
  }
  return SubscribeActionClass
}

class SubscribeActionImpl extends SubscribeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SubscribeAction>) {
    super(arg, init)
    this.types.add(schema.SubscribeAction)
  }

  static readonly __mixins: Mixin[] = [SubscribeActionMixin, InteractActionMixin];
}
SubscribeActionMixin.appliesTo = schema.SubscribeAction
SubscribeActionMixin.Class = SubscribeActionImpl

export const fromPointer = createFactory<SubscribeAction>([InteractActionMixin, SubscribeActionMixin], { types: [schema.SubscribeAction] });
