import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AnatomicalStructureMixin } from './AnatomicalStructure.js';

export interface Bone<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
}

export function BoneMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Bone> & RdfResourceCore> & Base {
  @namespace(schema)
  class BoneClass extends AnatomicalStructureMixin(Resource) implements Partial<Bone> {
  }
  return BoneClass
}

class BoneImpl extends BoneMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bone>) {
    super(arg, init)
    this.types.add(schema.Bone)
  }

  static readonly __mixins: Mixin[] = [BoneMixin, AnatomicalStructureMixin];
}
BoneMixin.appliesTo = schema.Bone
BoneMixin.Class = BoneImpl

export const fromPointer = createFactory<Bone>([AnatomicalStructureMixin, BoneMixin], { types: [schema.Bone] });
