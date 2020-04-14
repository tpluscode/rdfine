import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface CookAction extends Schema.CreateAction, RdfResource {
  foodEstablishment: Schema.FoodEstablishment | Schema.Place;
  foodEvent: Schema.FoodEvent;
  recipe: Schema.Recipe;
}

export default function CookActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CookActionClass extends CreateActionMixin(Resource) implements CookAction {
    @property.resource()
    foodEstablishment!: Schema.FoodEstablishment | Schema.Place;
    @property.resource()
    foodEvent!: Schema.FoodEvent;
    @property.resource()
    recipe!: Schema.Recipe;
  }
  return CookActionClass
}

class CookActionImpl extends CookActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CookAction>) {
    super(arg, init)
    this.types.add(schema.CookAction)
  }
}
CookActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CookAction)
CookActionMixin.Class = CookActionImpl
