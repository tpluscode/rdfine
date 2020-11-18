import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreateActionMixin } from './CreateAction';

export interface CookAction<ID extends ResourceNode = ResourceNode> extends Schema.CreateAction<ID>, RdfResource<ID> {
  foodEstablishment: Schema.FoodEstablishment<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  foodEvent: Schema.FoodEvent<SiblingNode<ID>> | undefined;
  recipe: Schema.Recipe<SiblingNode<ID>> | undefined;
}

export function CookActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CookActionClass extends CreateActionMixin(Resource) implements CookAction {
    @property.resource()
    foodEstablishment: Schema.FoodEstablishment | Schema.Place | undefined;
    @property.resource()
    foodEvent: Schema.FoodEvent | undefined;
    @property.resource()
    recipe: Schema.Recipe | undefined;
  }
  return CookActionClass
}

class CookActionImpl extends CookActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CookAction>) {
    super(arg, init)
    this.types.add(schema.CookAction)
  }

  static readonly __mixins: Mixin[] = [CookActionMixin, CreateActionMixin];
}
CookActionMixin.appliesTo = schema.CookAction
CookActionMixin.Class = CookActionImpl
