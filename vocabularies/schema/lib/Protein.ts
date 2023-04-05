import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BioChemEntityMixin } from './BioChemEntity.js';

export interface Protein<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BioChemEntity<D>, RdfResource<D> {
  hasBioPolymerSequence: string | undefined;
}

export function ProteinMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Protein> & RdfResourceCore> & Base {
  @namespace(schema)
  class ProteinClass extends BioChemEntityMixin(Resource) implements Partial<Protein> {
    @property.literal()
    hasBioPolymerSequence: string | undefined;
  }
  return ProteinClass
}

class ProteinImpl extends ProteinMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Protein>) {
    super(arg, init)
    this.types.add(schema.Protein)
  }

  static readonly __mixins: Mixin[] = [ProteinMixin, BioChemEntityMixin];
}
ProteinMixin.appliesTo = schema.Protein
ProteinMixin.Class = ProteinImpl

export const fromPointer = createFactory<Protein>([BioChemEntityMixin, ProteinMixin], { types: [schema.Protein] });
