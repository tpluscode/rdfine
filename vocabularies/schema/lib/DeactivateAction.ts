import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ControlActionMixin } from './ControlAction.js';

export interface DeactivateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ControlAction<D>, rdfine.RdfResource<D> {
}

export function DeactivateActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DeactivateAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DeactivateActionClass extends ControlActionMixin(Resource) implements Partial<DeactivateAction> {
  }
  return DeactivateActionClass
}

class DeactivateActionImpl extends DeactivateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeactivateAction>) {
    super(arg, init)
    this.types.add(schema.DeactivateAction)
  }

  static readonly __mixins: Mixin[] = [DeactivateActionMixin, ControlActionMixin];
}
DeactivateActionMixin.appliesTo = schema.DeactivateAction
DeactivateActionMixin.Class = DeactivateActionImpl

export const fromPointer = createFactory<DeactivateAction>([ControlActionMixin, DeactivateActionMixin], { types: [schema.DeactivateAction] });
