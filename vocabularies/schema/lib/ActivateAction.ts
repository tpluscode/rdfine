import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ControlActionMixin } from './ControlAction.js';

export interface ActivateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ControlAction<D>, RdfResource<D> {
}

export function ActivateActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ActivateAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ActivateActionClass extends ControlActionMixin(Resource) implements Partial<ActivateAction> {
  }
  return ActivateActionClass
}

class ActivateActionImpl extends ActivateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActivateAction>) {
    super(arg, init)
    this.types.add(schema.ActivateAction)
  }

  static readonly __mixins: Mixin[] = [ActivateActionMixin, ControlActionMixin];
}
ActivateActionMixin.appliesTo = schema.ActivateAction
ActivateActionMixin.Class = ActivateActionImpl

export const fromPointer = createFactory<ActivateAction>([ControlActionMixin, ActivateActionMixin], { types: [schema.ActivateAction] });
