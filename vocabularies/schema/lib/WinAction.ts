import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AchieveActionMixin } from './AchieveAction.js';

export interface WinAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AchieveAction<D>, rdfine.RdfResource<D> {
  loser: Schema.Person<D> | undefined;
}

export function WinActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WinAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WinActionClass extends AchieveActionMixin(Resource) {
    @rdfine.property.resource()
    loser: Schema.Person | undefined;
  }
  return WinActionClass as any
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

export const fromPointer = createFactory<WinAction>([AchieveActionMixin, WinActionMixin], { types: [schema.WinAction] });
