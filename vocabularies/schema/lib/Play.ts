import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Play<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function PlayMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Play> & RdfResourceCore> & Base {
  @namespace(schema)
  class PlayClass extends CreativeWorkMixin(Resource) implements Partial<Play> {
  }
  return PlayClass
}

class PlayImpl extends PlayMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Play>) {
    super(arg, init)
    this.types.add(schema.Play)
  }

  static readonly __mixins: Mixin[] = [PlayMixin, CreativeWorkMixin];
}
PlayMixin.appliesTo = schema.Play
PlayMixin.Class = PlayImpl

export const fromPointer = createFactory<Play>([CreativeWorkMixin, PlayMixin], { types: [schema.Play] });
