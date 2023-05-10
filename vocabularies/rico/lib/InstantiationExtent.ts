import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ExtentMixin } from './Extent.js';

export interface InstantiationExtent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Extent<D>, rdfine.RdfResource<D> {
}

export function InstantiationExtentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<InstantiationExtent> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class InstantiationExtentClass extends ExtentMixin(Resource) implements Partial<InstantiationExtent> {
  }
  return InstantiationExtentClass
}

class InstantiationExtentImpl extends InstantiationExtentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InstantiationExtent>) {
    super(arg, init)
    this.types.add(rico.InstantiationExtent)
  }

  static readonly __mixins: Mixin[] = [InstantiationExtentMixin, ExtentMixin];
}
InstantiationExtentMixin.appliesTo = rico.InstantiationExtent
InstantiationExtentMixin.Class = InstantiationExtentImpl

export const fromPointer = createFactory<InstantiationExtent>([ExtentMixin, InstantiationExtentMixin], { types: [rico.InstantiationExtent] });
