import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Play<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function PlayMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlayClass extends CreativeWorkMixin(Resource) implements Play {
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
