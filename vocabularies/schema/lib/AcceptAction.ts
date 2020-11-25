import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AllocateActionMixin } from './AllocateAction';

export interface AcceptAction<ID extends ResourceNode = ResourceNode> extends Schema.AllocateAction<ID>, RdfResource<ID> {
}

export function AcceptActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AcceptActionClass extends AllocateActionMixin(Resource) implements AcceptAction {
  }
  return AcceptActionClass
}

class AcceptActionImpl extends AcceptActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AcceptAction>) {
    super(arg, init)
    this.types.add(schema.AcceptAction)
  }

  static readonly __mixins: Mixin[] = [AcceptActionMixin, AllocateActionMixin];
}
AcceptActionMixin.appliesTo = schema.AcceptAction
AcceptActionMixin.Class = AcceptActionImpl
