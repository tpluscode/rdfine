import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BioChemEntityMixin } from './BioChemEntity';

export interface Gene<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BioChemEntity<D>, RdfResource<D> {
  alternativeOf: Schema.Gene<D> | undefined;
  encodesBioChemEntity: Schema.BioChemEntity<D> | undefined;
  expressedIn: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | Schema.BioChemEntity<D> | undefined;
  hasBioPolymerSequence: string | undefined;
}

export function GeneMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Gene> & RdfResourceCore> & Base {
  @namespace(schema)
  class GeneClass extends BioChemEntityMixin(Resource) implements Partial<Gene> {
    @property.resource()
    alternativeOf: Schema.Gene | undefined;
    @property.resource()
    encodesBioChemEntity: Schema.BioChemEntity | undefined;
    @property.resource()
    expressedIn: Schema.AnatomicalStructure | Schema.AnatomicalSystem | Schema.BioChemEntity | undefined;
    @property.literal()
    hasBioPolymerSequence: string | undefined;
  }
  return GeneClass
}

class GeneImpl extends GeneMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Gene>) {
    super(arg, init)
    this.types.add(schema.Gene)
  }

  static readonly __mixins: Mixin[] = [GeneMixin, BioChemEntityMixin];
}
GeneMixin.appliesTo = schema.Gene
GeneMixin.Class = GeneImpl

export const fromPointer = createFactory<Gene>([BioChemEntityMixin, GeneMixin], { types: [schema.Gene] });
