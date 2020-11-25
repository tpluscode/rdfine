import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlayActionMixin } from './PlayAction';

export interface PerformAction<ID extends ResourceNode = ResourceNode> extends Schema.PlayAction<ID>, RdfResource<ID> {
  entertainmentBusiness: Schema.EntertainmentBusiness<SiblingNode<ID>> | undefined;
}

export function PerformActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformActionClass extends PlayActionMixin(Resource) implements PerformAction {
    @property.resource()
    entertainmentBusiness: Schema.EntertainmentBusiness | undefined;
  }
  return PerformActionClass
}

class PerformActionImpl extends PerformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformAction>) {
    super(arg, init)
    this.types.add(schema.PerformAction)
  }

  static readonly __mixins: Mixin[] = [PerformActionMixin, PlayActionMixin];
}
PerformActionMixin.appliesTo = schema.PerformAction
PerformActionMixin.Class = PerformActionImpl
