import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Playground<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function PlaygroundMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Playground> & RdfResourceCore> & Base {
  @namespace(schema)
  class PlaygroundClass extends CivicStructureMixin(Resource) implements Partial<Playground> {
  }
  return PlaygroundClass
}

class PlaygroundImpl extends PlaygroundMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Playground>) {
    super(arg, init)
    this.types.add(schema.Playground)
  }

  static readonly __mixins: Mixin[] = [PlaygroundMixin, CivicStructureMixin];
}
PlaygroundMixin.appliesTo = schema.Playground
PlaygroundMixin.Class = PlaygroundImpl

export const fromPointer = createFactory<Playground>([CivicStructureMixin, PlaygroundMixin], { types: [schema.Playground] });
