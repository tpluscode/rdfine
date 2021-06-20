import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface Joint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
  biomechnicalClass: string | undefined;
  functionalClass: Schema.MedicalEntity<D> | undefined;
  functionalClassLiteral: string | undefined;
  structuralClass: string | undefined;
}

export function JointMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Joint> & RdfResourceCore> & Base {
  @namespace(schema)
  class JointClass extends AnatomicalStructureMixin(Resource) implements Partial<Joint> {
    @property.literal()
    biomechnicalClass: string | undefined;
    @property.resource()
    functionalClass: Schema.MedicalEntity | undefined;
    @property.literal({ path: schema.functionalClass })
    functionalClassLiteral: string | undefined;
    @property.literal()
    structuralClass: string | undefined;
  }
  return JointClass
}

class JointImpl extends JointMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Joint>) {
    super(arg, init)
    this.types.add(schema.Joint)
  }

  static readonly __mixins: Mixin[] = [JointMixin, AnatomicalStructureMixin];
}
JointMixin.appliesTo = schema.Joint
JointMixin.Class = JointImpl

export const fromPointer = createFactory<Joint>([AnatomicalStructureMixin, JointMixin], { types: [schema.Joint] });
