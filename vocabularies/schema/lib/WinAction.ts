import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AchieveActionMixin } from './AchieveAction';

export interface WinAction<ID extends ResourceNode = ResourceNode> extends Schema.AchieveAction<ID>, RdfResource<ID> {
  loser: Schema.Person<SiblingNode<ID>> | undefined;
}

export function WinActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WinActionClass extends AchieveActionMixin(Resource) implements WinAction {
    @property.resource()
    loser: Schema.Person | undefined;
  }
  return WinActionClass
}

class WinActionImpl extends WinActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WinAction>) {
    super(arg, init)
    this.types.add(schema.WinAction)
  }

  static readonly __mixins: Mixin[] = [WinActionMixin, AchieveActionMixin];
}
WinActionMixin.appliesTo = schema.WinAction
WinActionMixin.Class = WinActionImpl
