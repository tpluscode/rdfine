import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';

export interface Transformation extends RdfResource {
  scriptFormat: string;
  source: string;
  targetFormat: string;
  title: RDF.Term;
  url: string;
}

export function TransformationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TransformationClass extends Resource implements Transformation {
    @property.literal()
    scriptFormat!: string;
    @property.literal()
    source!: string;
    @property.literal()
    targetFormat!: string;
    @property()
    title!: RDF.Term;
    @property.literal()
    url!: string;
  }
  return TransformationClass
}

class TransformationImpl extends TransformationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Transformation>) {
    super(arg, init)
    this.types.add(csvw.Transformation)
  }
}
TransformationMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Transformation)
TransformationMixin.Class = TransformationImpl
