import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<CookAction>) {
    super(arg)
    this.types.add(schema.CookAction)
    initializeProperties<CookAction>(this, init)
  }
}
CookActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CookAction)
CookActionMixin.Class = CookActionImpl
