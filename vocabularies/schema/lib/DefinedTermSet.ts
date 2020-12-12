import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface DefinedTermSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  hasDefinedTerm: RDF.Term | undefined;
}

export function DefinedTermSetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DefinedTermSet> & RdfResourceCore> & Base {
  @namespace(schema)
  class DefinedTermSetClass extends CreativeWorkMixin(Resource) implements Partial<DefinedTermSet> {
    @property()
    hasDefinedTerm: RDF.Term | undefined;
  }
  return DefinedTermSetClass
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
