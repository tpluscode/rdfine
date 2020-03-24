import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type * as Csvw from '.';

export interface Transformation extends RdfResource {
  scriptFormat: string;
  source: string;
  targetFormat: string;
  title: rdf.Term;
  url: string;
}

export default function TransformationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TransformationClass extends Resource implements Transformation {
    @property.literal()
    scriptFormat!: string;
    @property.literal()
    source!: string;
    @property.literal()
    targetFormat!: string;
    @property()
    title!: rdf.Term;
    @property.literal()
    url!: string;
  }
  return TransformationClass
}

class TransformationImpl extends TransformationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.Transformation)
  }
}
TransformationMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Transformation)
TransformationMixin.Class = TransformationImpl
