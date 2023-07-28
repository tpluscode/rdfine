import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface PublicToilet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function PublicToiletMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PublicToilet & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PublicToiletClass extends CivicStructureMixin(Resource) {
  }
  return PublicToiletClass as any
}

class PublicToiletImpl extends PublicToiletMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PublicToilet>) {
    super(arg, init)
    this.types.add(schema.PublicToilet)
  }

  static readonly __mixins: Mixin[] = [PublicToiletMixin, CivicStructureMixin];
}
PublicToiletMixin.appliesTo = schema.PublicToilet
PublicToiletMixin.Class = PublicToiletImpl

export const fromPointer = createFactory<PublicToilet>([CivicStructureMixin, PublicToiletMixin], { types: [schema.PublicToilet] });
