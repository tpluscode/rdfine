import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface AlignmentObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  alignmentType: string | undefined;
  educationalFramework: string | undefined;
  targetDescription: string | undefined;
  targetName: string | undefined;
  targetUrl: RDF.NamedNode | undefined;
}

export function AlignmentObjectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AlignmentObject & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AlignmentObjectClass extends IntangibleMixin(Resource) {
    @rdfine.property.literal()
    alignmentType: string | undefined;
    @rdfine.property.literal()
    educationalFramework: string | undefined;
    @rdfine.property.literal()
    targetDescription: string | undefined;
    @rdfine.property.literal()
    targetName: string | undefined;
    @rdfine.property()
    targetUrl: RDF.NamedNode | undefined;
  }
  return AlignmentObjectClass as any
}

class AlignmentObjectImpl extends AlignmentObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AlignmentObject>) {
    super(arg, init)
    this.types.add(schema.AlignmentObject)
  }

  static readonly __mixins: Mixin[] = [AlignmentObjectMixin, IntangibleMixin];
}
AlignmentObjectMixin.appliesTo = schema.AlignmentObject
AlignmentObjectMixin.Class = AlignmentObjectImpl

export const fromPointer = createFactory<AlignmentObject>([IntangibleMixin, AlignmentObjectMixin], { types: [schema.AlignmentObject] });
