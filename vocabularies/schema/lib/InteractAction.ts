import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface InteractAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function InteractActionMixin<Base extends Constructor>(Resource: Base): Constructor<InteractAction> & Base {
  @namespace(schema)
  class InteractActionClass extends ActionMixin(Resource) implements InteractAction {
  }
  return InteractActionClass
}

class InteractActionImpl extends InteractActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InteractAction>) {
    super(arg, init)
    this.types.add(schema.InteractAction)
  }

  static readonly __mixins: Mixin[] = [InteractActionMixin, ActionMixin];
}
InteractActionMixin.appliesTo = schema.InteractAction
InteractActionMixin.Class = InteractActionImpl
