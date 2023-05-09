import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ControlActionMixin } from './ControlAction.js';

export interface SuspendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ControlAction<D>, rdfine.RdfResource<D> {
}

export function SuspendActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SuspendAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SuspendActionClass extends ControlActionMixin(Resource) implements Partial<SuspendAction> {
  }
  return SuspendActionClass
}

class SuspendActionImpl extends SuspendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuspendAction>) {
    super(arg, init)
    this.types.add(schema.SuspendAction)
  }

  static readonly __mixins: Mixin[] = [SuspendActionMixin, ControlActionMixin];
}
SuspendActionMixin.appliesTo = schema.SuspendAction
SuspendActionMixin.Class = SuspendActionImpl

export const fromPointer = createFactory<SuspendAction>([ControlActionMixin, SuspendActionMixin], { types: [schema.SuspendAction] });
