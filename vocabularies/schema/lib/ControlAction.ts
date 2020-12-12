import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface ControlAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function ControlActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ControlAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ControlActionClass extends ActionMixin(Resource) implements Partial<ControlAction> {
  }
  return ControlActionClass
}

class ControlActionImpl extends ControlActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ControlAction>) {
    super(arg, init)
    this.types.add(schema.ControlAction)
  }

  static readonly __mixins: Mixin[] = [ControlActionMixin, ActionMixin];
}
ControlActionMixin.appliesTo = schema.ControlAction
ControlActionMixin.Class = ControlActionImpl

export const fromPointer = createFactory<ControlAction>([ActionMixin, ControlActionMixin], { types: [schema.ControlAction] });
