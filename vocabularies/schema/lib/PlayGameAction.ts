import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface PlayGameAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, rdfine.RdfResource<D> {
  gameAvailabilityType: string | undefined;
  gameAvailabilityTypeTerm: Schema.GameAvailabilityEnumeration | undefined;
}

export function PlayGameActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PlayGameAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PlayGameActionClass extends ConsumeActionMixin(Resource) implements Partial<PlayGameAction> {
    @rdfine.property.literal()
    gameAvailabilityType: string | undefined;
    @rdfine.property({ path: schema.gameAvailabilityType })
    gameAvailabilityTypeTerm: Schema.GameAvailabilityEnumeration | undefined;
  }
  return PlayGameActionClass
}

class PlayGameActionImpl extends PlayGameActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlayGameAction>) {
    super(arg, init)
    this.types.add(schema.PlayGameAction)
  }

  static readonly __mixins: Mixin[] = [PlayGameActionMixin, ConsumeActionMixin];
}
PlayGameActionMixin.appliesTo = schema.PlayGameAction
PlayGameActionMixin.Class = PlayGameActionImpl

export const fromPointer = createFactory<PlayGameAction>([ConsumeActionMixin, PlayGameActionMixin], { types: [schema.PlayGameAction] });
