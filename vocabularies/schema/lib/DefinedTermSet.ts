import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface DefinedTermSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  hasDefinedTerm: RDF.Term | undefined;
}

export function DefinedTermSetMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DefinedTermSet & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DefinedTermSetClass extends CreativeWorkMixin(Resource) {
    @rdfine.property()
    hasDefinedTerm: RDF.Term | undefined;
  }
  return DefinedTermSetClass as any
}

class DefinedTermSetImpl extends DefinedTermSetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DefinedTermSet>) {
    super(arg, init)
    this.types.add(schema.DefinedTermSet)
  }

  static readonly __mixins: Mixin[] = [DefinedTermSetMixin, CreativeWorkMixin];
}
DefinedTermSetMixin.appliesTo = schema.DefinedTermSet
DefinedTermSetMixin.Class = DefinedTermSetImpl

export const fromPointer = createFactory<DefinedTermSet>([CreativeWorkMixin, DefinedTermSetMixin], { types: [schema.DefinedTermSet] });
