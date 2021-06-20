import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ContributorMixin } from './Contributor';

export interface Creator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Contributor<D>, RdfResource<D> {
}

export function CreatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Creator> & RdfResourceCore> & Base {
  @namespace(prov)
  class CreatorClass extends ContributorMixin(Resource) implements Partial<Creator> {
  }
  return CreatorClass
}

class CreatorImpl extends CreatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Creator>) {
    super(arg, init)
    this.types.add(prov.Creator)
  }

  static readonly __mixins: Mixin[] = [CreatorMixin, ContributorMixin];
}
CreatorMixin.appliesTo = prov.Creator
CreatorMixin.Class = CreatorImpl

export const fromPointer = createFactory<Creator>([ContributorMixin, CreatorMixin], { types: [prov.Creator] });
