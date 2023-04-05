import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreateActionMixin } from './CreateAction.js';

export interface CookAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
  foodEstablishment: Schema.FoodEstablishment<D> | Schema.Place<D> | undefined;
  foodEvent: Schema.FoodEvent<D> | undefined;
  recipe: Schema.Recipe<D> | undefined;
}

export function CookActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CookAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CookActionClass extends CreateActionMixin(Resource) implements Partial<CookAction> {
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

export const fromPointer = createFactory<CookAction>([CreateActionMixin, CookActionMixin], { types: [schema.CookAction] });
