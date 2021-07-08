import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface SeekToAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function SeekToActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SeekToAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class SeekToActionClass extends ActionMixin(Resource) implements Partial<SeekToAction> {
  }
  return SeekToActionClass
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
