import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AchieveActionMixin } from './AchieveAction.js';

export interface WinAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AchieveAction<D>, RdfResource<D> {
  loser: Schema.Person<D> | undefined;
}

export function WinActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WinAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class WinActionClass extends AchieveActionMixin(Resource) implements Partial<WinAction> {
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

export const fromPointer = createFactory<WinAction>([AchieveActionMixin, WinActionMixin], { types: [schema.WinAction] });
