import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';

export interface Space<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  'has_usergroup': Sioc.Usergroup<D> | undefined;
  'space_of': RDF.Term | undefined;
}

export function SpaceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Space> & RdfResourceCore> & Base {
  @rdfine.namespace(sioc)
  class SpaceClass extends Resource implements Partial<Space> {
    @rdfine.property.resource({ implicitTypes: [sioc.Usergroup] })
    'has_usergroup': Sioc.Usergroup | undefined;
    @rdfine.property()
    'space_of': RDF.Term | undefined;
  }
  return SpaceClass
}

class SpaceImpl extends SpaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Space>) {
    super(arg, init)
    this.types.add(sioc.Space)
  }

  static readonly __mixins: Mixin[] = [SpaceMixin];
}
SpaceMixin.appliesTo = sioc.Space
SpaceMixin.Class = SpaceImpl

export const fromPointer = createFactory<Space>([SpaceMixin], { types: [sioc.Space] });
