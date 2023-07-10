import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface SeekToAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  startOffset: Schema.HyperTocEntry<D> | undefined;
  startOffsetLiteral: number | undefined;
}

export function SeekToActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SeekToAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SeekToActionClass extends ActionMixin(Resource) {
    @rdfine.property.resource()
    startOffset: Schema.HyperTocEntry | undefined;
    @rdfine.property.literal({ path: schema.startOffset, type: Number })
    startOffsetLiteral: number | undefined;
  }
  return SeekToActionClass as any
}

class SeekToActionImpl extends SeekToActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SeekToAction>) {
    super(arg, init)
    this.types.add(schema.SeekToAction)
  }

  static readonly __mixins: Mixin[] = [SeekToActionMixin, ActionMixin];
}
SeekToActionMixin.appliesTo = schema.SeekToAction
SeekToActionMixin.Class = SeekToActionImpl

export const fromPointer = createFactory<SeekToAction>([ActionMixin, SeekToActionMixin], { types: [schema.SeekToAction] });
