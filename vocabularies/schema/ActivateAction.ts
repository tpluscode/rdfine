import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ControlActionMixin } from './ControlAction';

export interface ActivateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ControlAction<D>, RdfResource<D> {
}

export function ActivateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActivateActionClass extends ControlActionMixin(Resource) implements ActivateAction {
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
