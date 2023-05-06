import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Transformation<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  scriptFormat: string | undefined;
  source: string | undefined;
  targetFormat: string | undefined;
  title: RDF.Term | undefined;
  url: string | undefined;
}

export function TransformationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Transformation> & RdfResourceCore> & Base {
  @namespace(csvw)
  class TransformationClass extends Resource implements Partial<Transformation> {
    @property.literal()
    scriptFormat: string | undefined;
    @property.literal()
    source: string | undefined;
    @property.literal()
    targetFormat: string | undefined;
    @property()
    title: RDF.Term | undefined;
    @property.literal()
    url: string | undefined;
  }
  return TransformationClass
}

class TransformationImpl extends TransformationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Transformation>) {
    super(arg, init)
    this.types.add(csvw.Transformation)
  }

  static readonly __mixins: Mixin[] = [TransformationMixin];
}
TransformationMixin.appliesTo = csvw.Transformation
TransformationMixin.Class = TransformationImpl

export const fromPointer = createFactory<Transformation>([TransformationMixin], { types: [csvw.Transformation] });
