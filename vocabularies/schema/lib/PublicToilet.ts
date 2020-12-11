import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface PublicToilet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function PublicToiletMixin<Base extends Constructor>(Resource: Base): Constructor<PublicToilet> & Base {
  @namespace(schema)
  class PublicToiletClass extends CivicStructureMixin(Resource) implements Partial<PublicToilet> {
  }
  return PublicToiletClass
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
