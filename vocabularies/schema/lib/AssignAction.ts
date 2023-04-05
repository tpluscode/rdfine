import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AllocateActionMixin } from './AllocateAction.js';

export interface AssignAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AllocateAction<D>, RdfResource<D> {
}

export function AssignActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AssignAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AssignActionClass extends AllocateActionMixin(Resource) implements Partial<AssignAction> {
  }
  return AssignActionClass
}

class AssignActionImpl extends AssignActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AssignAction>) {
    super(arg, init)
    this.types.add(schema.AssignAction)
  }

  static readonly __mixins: Mixin[] = [AssignActionMixin, AllocateActionMixin];
}
AssignActionMixin.appliesTo = schema.AssignAction
AssignActionMixin.Class = AssignActionImpl

export const fromPointer = createFactory<AssignAction>([AllocateActionMixin, AssignActionMixin], { types: [schema.AssignAction] });
