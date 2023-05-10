import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InformActionMixin } from './InformAction.js';

export interface ConfirmAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InformAction<D>, rdfine.RdfResource<D> {
}

export function ConfirmActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ConfirmAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ConfirmActionClass extends InformActionMixin(Resource) implements Partial<ConfirmAction> {
  }
  return ConfirmActionClass
}

class ConfirmActionImpl extends ConfirmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConfirmAction>) {
    super(arg, init)
    this.types.add(schema.ConfirmAction)
  }

  static readonly __mixins: Mixin[] = [ConfirmActionMixin, InformActionMixin];
}
ConfirmActionMixin.appliesTo = schema.ConfirmAction
ConfirmActionMixin.Class = ConfirmActionImpl

export const fromPointer = createFactory<ConfirmAction>([InformActionMixin, ConfirmActionMixin], { types: [schema.ConfirmAction] });
