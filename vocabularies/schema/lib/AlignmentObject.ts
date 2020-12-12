import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface AlignmentObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  alignmentType: string | undefined;
  educationalFramework: string | undefined;
  targetDescription: string | undefined;
  targetName: string | undefined;
  targetUrl: RDF.NamedNode | undefined;
}

export function AlignmentObjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AlignmentObject> & RdfResourceCore> & Base {
  @namespace(schema)
  class AlignmentObjectClass extends IntangibleMixin(Resource) implements Partial<AlignmentObject> {
    @property.literal()
    alignmentType: string | undefined;
    @property.literal()
    educationalFramework: string | undefined;
    @property.literal()
    targetDescription: string | undefined;
    @property.literal()
    targetName: string | undefined;
    @property()
    targetUrl: RDF.NamedNode | undefined;
  }
  return AlignmentObjectClass
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
